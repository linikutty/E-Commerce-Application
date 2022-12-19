import React, { useState,useEffect } from 'react';
import axios from "axios";
import "./App.css";
// import Login from './login.js';
const Register=(()=>{


  const  [FirstName,setFirstName]=useState('');
  const  [LastName,setLastName]=useState('');
  const  [Mail,setMail]=useState('');
  const  [Password,setPassword]=useState('')


const validate=(()=>{


  // const cond1 = '/^(?=.*[a-z]).{6,20}$/';
  // const cond2 = '/^(?=.*[A-Z]).{6,20}$/';
  // const cond3 = '/^(?=.*[0-9]).{6,20}$/';
  //  const emailCond = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
  
  if(FirstName<=0){
    alert("Name is Required");
    
    return false;
  }
  if(LastName<=0){
    alert("Name is Required");
    
    return false;
  }
  
  if(Mail<=0){
    alert("Email is Required");
    
    return false;
  }
  //  if (!Mail.match(emailCond)){
  //   alert("Mail is invalid");
  //   return false;
  // }
  if(Password<=0){
    alert("Password is Required");
    
    return false;
  }
 
  store();

})

  const store=(()=>{

  
    
    console.log(FirstName,LastName,Mail,Password);
    
     axios.post("http://localhost:7070/api/register",{
      FirstName:FirstName,
      LastName:LastName,
      Mail:Mail,
      Password:Password,
    }
     
    ).then((response)=>{
      console.log(response);
    })
    setFirstName(FirstName);
    setLastName(LastName);
    setMail(Mail);
    setPassword(Password);
  
  })
  

  return(
    <section className="vh-100 bg-image">
 {/* style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');"> */}
<div className="mask d-flex align-items-center h-100 gradient-custom-3">
<div className="container h-100">
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
      <div className="card" >
        <div className="card-body p-5">
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>

          <form>

            <div className="form-outline mb-4">
              <input type="text" name="FirstName" value={FirstName} onChange={(e)=>{setFirstName(e.target.value)}} id="FirstName" className="form-control form-control-lg" required/>
              <label className="form-label" >First Name</label>
            </div>
            

            <div className="form-outline mb-4">
              <input type="text" name="LastName" value={LastName} onChange={(e)=>{setLastName(e.target.value)}} id="LastName" className="form-control form-control-lg" required/>
              <label className="form-label" >Last Name</label>
            </div>


            <div className="form-outline mb-4">
              <input type="email" name="Mail" value={Mail}  onChange={(e)=>{setMail(e.target.value)}} id="form3Example3cg" className="form-control form-control-lg" required/>
              <label className="form-label" >Your Email</label>
            </div>

           

            <div className="form-outline mb-4">
              <input type="password" name="Password" value={Password} onChange={(e)=>{setPassword(e.target.value)}}  id="form3Example4cg" className="form-control form-control-lg" required/>
              <label className="form-label" >Password</label>
            </div>

            

           

            <div className="form-check d-flex justify-content-center mb-5">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
              <label className="form-check-label" >
                I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
              </label>
            </div>

            <div className="d-flex justify-content-center">
              <button type="button" onClick={validate}
                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
            </div>

            <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login"
                className="fw-bold text-body"><u>Login here</u></a></p>

          </form>

        </div>
      </div>
    </div>
  </div>
</div>
</div>
</section>
)

//     return(
//         <section className="vh-100 bg-image">
//      {/* style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');"> */}
//   <div className="mask d-flex align-items-center h-100 gradient-custom-3">
//     <div className="container h-100">
//       <div className="row d-flex justify-content-center align-items-center h-100">
//         <div className="col-12 col-md-9 col-lg-7 col-xl-6">
//           <div className="card" >
//             <div className="card-body p-5">
//               <h2 className="text-uppercase text-center mb-5">Create an account</h2>

//               <form>

//                 <div className="form-outline mb-4">
//                   <input type="text" name="FirstName" value={inputValues.FirstName} onChange={(e)=>handleChange(e)} id="FirstName" className="form-control form-control-lg" required/>
//                   <label className="form-label" >First Name</label>
//                 </div>
//                 {validation.FirstName && <p>{validation.FirstName}</p>}
//                   {validation.FirstName && console.log(validation)}

//                 <div className="form-outline mb-4">
//                   <input type="text" name="LastName" value={inputValues.LastName} onChange={(e)=>handleChange(e)} id="LastName" className="form-control form-control-lg" required/>
//                   <label className="form-label" >Last Name</label>
//                 </div>

//                 {validation.LastName && <p>{validation.LastName}</p>}
//                    {validation.LastName && console.log(validation)}

//                 <div className="form-outline mb-4">
//                   <input type="email" name="Mail" value={inputValues.Mail}  onChange={(e)=>handleChange(e)} id="form3Example3cg" className="form-control form-control-lg" required/>
//                   <label className="form-label" >Your Email</label>
//                 </div>

//                 {validation.Mail && <p>{validation.Mail}</p>}

//                 <div className="form-outline mb-4">
//                   <input type="password" name="Password" value={inputValues.Password} onChange={(e)=>handleChange(e)}  id="form3Example4cg" className="form-control form-control-lg" required/>
//                   <label className="form-label" >Password</label>
//                 </div>

//                 {validation.Password && <p>{validation.Password}</p>}

               

//                 <div className="form-check d-flex justify-content-center mb-5">
//                   <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
//                   <label className="form-check-label" >
//                     I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
//                   </label>
//                 </div>

//                 <div className="d-flex justify-content-center">
//                   <button type="button" onClick={handleSubmit}
//                     className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
//                 </div>

//                 <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login"
//                     className="fw-bold text-body"><u>Login here</u></a></p>

//               </form>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//     )
})
export default Register;