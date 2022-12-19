import React,{useState,useEffect} from 'react';


const Cart =( () => {
    // const [productId,setproductId]=useState('');

    const [cartList, setcartList] = useState([]);

    useEffect(() => {
        const getcart = async () => {
          const res = await fetch("http://localhost:7070/cart");
        //   {
        //     productId:productId
        //   }
          const getdata = await res.json();
          setcartList(getdata);
          // console.log(getdata);
        //   setproductId(productId)
        };
        getcart();
    },[]);
  return (
    <>
    <div className='container'>
    <h1>Cart</h1>
    <table className='table table-striped table-dark'>
        <thead className='tables'>
            <tr>
            <th>Id</th>
            <th>ProductName</th>
            <th>Cost</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
        {cartList.map((cartItem)=>(
            <tr>
            <td>{cartItem.productId}</td>
            <td>{cartItem.ProductName}</td>
            <td>{cartItem.cost}</td>
            <td><button>Delete</button></td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
    </>
    
  )
})

export default Cart