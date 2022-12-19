import React, { useState } from "react";
import axios from "axios";
// import  Redirect  from 'react-router-dom';
 import "./App.css";
 import {useNavigate} from "react-router-dom";
// import Register from './register';

const Login = () => {

  const [Mail, setMail] = useState("");
  const [Password, setPassword] = useState("");
  const [loginStatus, setloginStatus] = useState("");
  const navigate=useNavigate();

  const validate=(()=>{
    if(Mail<=0){
      alert("Email is Required");
      
      return false;
    }
    if(Password<=0){
      alert("Password is Required");
      
      return false;
    }
    logins();
  })

  const logins = () => {
    // validate();
    console.log(Mail, Password);
    if(!Mail==" " && !Password ==" "){
    axios.post("http://localhost:7070/api/login", {
        Mail: Mail,
        Password: Password,
      })
      .then((response) => {
        console.log(response);
        if(response.data.message){
          console.log(response.data.message);
       
            setloginStatus(response.data.message);
            navigate("/items")
      
       
        //     // return <Redirect to='/profile'  />
        }
        else if(response.status== 200){
            // console.log(response.data.message);
            setloginStatus(response.data.message)
            // navigate("/login")
        }
      })
    
      .catch((error) => {
        // navigate("/login")
      });
    }
   
  };

  return (
    <>
      <div className="wrapper">
          <div className="logo">
              <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWWV7IDskt9RcbPioqay9M8mI0SDVt6KOCvA&usqp=CAU"
                    alt=""
                  />
          </div>
          <div className="text-center mt-4 name">Login</div>
            
                  <input type="email" className="form-field d-flex align-items-center" name="Mail" value={Mail} onChange={(e)=>{setMail(e.target.value)}} required/>
                  <input type="password" className="form-field d-flex align-items-center" name="Password" value={Password} onChange={(e)=>{setPassword(e.target.value)}} required/>

                  <input onClick={validate} className="btn mt-3" type="submit" value="Login"/>
               
                <div>
            <div className=" text-center mt-5 ">
                    <a  href="/register" className="btnsign">Sign up</a>
               </div> 
               <h1 className="msg text-center p-4">{loginStatus}</h1> 
            </div>

           
         </div>
   
    </>
  );
};
export default Login;