import React, { useState, useEffect } from 'react';
// import Cart from "./cart.js";

const Items = (() => {

    const [showList, setshowList] = useState([]);

    useEffect(() => {
        const getcategory = async () => {
          const res = await fetch("http://localhost:7070/api/list");
          const getdata = await res.json();
          setshowList(getdata);
          // console.log(getdata);
        };
        getcategory();
    },[]);

    // const cart=((index,value)=>{
    //     for (let i=0;i<value.length;i++){
    //         let cartBtn=value[i];
    //         cartBtn.addEventListener("click",(event)=>{

    //         })
    //     }
       
    // })
  return (
    <div className='container'>
        <h1 className='para text-center p-2'>Every product is special</h1>
        <div className="items card row"  >
        {showList.map((ShoppingItem)=>(
        <div className="items card-body col-6 " >
      
            <h5 className="card-title">{ShoppingItem.ProductName}</h5>
            <p className="card-text">{ShoppingItem.desc}</p>
            <p className="card-text">{ShoppingItem.cost}</p>
            <a href="/cart" className="btn btn-primary" >Add To Cart</a>
        
        </div>
        ))}
        
        </div>

    </div>
  )
})

export default Items


