import React, { useState ,useEffect } from 'react';
import './menu.css';
import { FaPlusCircle } from 'react-icons/fa';
import { FaMinusCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";

const MenuBoby = () => {
  const [menuList, setMenuList] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [sum, setSum]=useState(0);
  const addToOrderList = (item) => {
    const existingItem= orderList.find((orderItem)=> orderItem.id===item.id);
    if(existingItem){
      existingItem.quantity+=1;
      existingItem.totalPrice=existingItem.quantity* Number(existingItem.price);
    }
    else{
      const newItem={
        ...item,
        quantity:1,
        totalPrice:Number(item.price),
      };
      setOrderList([...orderList, newItem]);
    }
    
    var result=sum+Number(item.price);
    setSum(result);
  };

  const removeFromOrderList = (item) => {
    const updatedOrderList = orderList.map((orderItem) => {
      if (orderItem.id === item.id) {
        orderItem.quantity -= 1;
        orderItem.totalPrice = orderItem.quantity * Number(orderItem.price);
        setSum(sum - Number(item.price));
      }
      return orderItem;
    });
  
    const filteredOrderList = updatedOrderList.filter((orderItem) => orderItem.quantity > 0);
    setOrderList(filteredOrderList);
  };
  


  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      let result = await fetch('http://localhost:5000/Menu');
      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }
      let data = await result.json();
      setMenuList(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
const confirm = async () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user) {
    const { name, table, _id: userId } = user;
    const totalBill = sum;

    console.log('userinfo: ', name, ' table', table);
    console.log('user:', user);

    let result = await fetch('http://localhost:5000/order', {
      method: 'post',
      body: JSON.stringify({ userId, name, table, totalBill }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    result = await result.json();
    console.log(result);
    localStorage.setItem('orderInfo',JSON.stringify(result));
  } else {
    console.error('User information not found in local storage.');
  }
};
const deleteProduct=async(id)=>{
  let result=await fetch(`http://localhost:5000/product/${id}`,{
    method:"Delete"
  });
  result=await result.json();
  if(result){
    getProducts();
  }
};
  return (
    <div className='MenuPage'>
      <div className='MenuBox'>
      <Link to="add">
      <button className='operation'>Add Item</button>
      </Link>
        <hr/>
        <div className='Menu-list'>
     <h3>Menu</h3>
     <ul>
      <li>Id</li>
      <li>+/-</li>
      <li>Title</li>
      <li>Category</li>
      <li>Price</li>
      <li>operation</li>
     </ul>
     {menuList.map((product,index) => (
       <ul key={product._id}>
         <li className='col1'>{index +1} </li>
         <li><div className='CartButton'> 
        <p onClick={() => removeFromOrderList({id:product.id,name:product.name})}>
            <FaMinusCircle/>
             </p>  
          <p onClick={() => addToOrderList({id: product.id,name:product.title, price:product.price})}>  
          <FaPlusCircle/>
           </p>  
        </div></li>
         <li>{product.title}</li>
         <li>{product.category}</li>
         <li>{product.price}</li>
          <li><button className='operation' onClick={()=>deleteProduct(product._id)}>Delete</button></li>
       </ul>
     ))}
    </div>
        {/* <div className='MenuItems'>
          {menuList.map((data, index) => (
            <Card
              key={data.id} 
              cardData={data}
              deleteProduct={()=>deleteProduct(data.id)}//We have to pass by reference
              addToOrderList={addToOrderList}
              removeFromOrderList={() => removeFromOrderList(data)}
            />
          ))}
       

        </div> */}
      </div>
    
      <div className="orderList">
        <h1>Table Orders</h1>
        <h5>  Item Name | Price*Quantity |Total Price      </h5>
        <ul>
          {orderList.map((item, index) => (
            <li key={index}> 
             <b> {index+1}  :  </b>
             {item.name} | Rs{item.price} x {item.quantity} = Rs{item.totalPrice} 
            </li>
          ))}
          
          <b className='total'><hr/>Total Price: {sum}  
          </b>
          <br />
          <Link to='./bill'>
          <button className='confirmbtn' onClick={confirm}> confirm</button>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default MenuBoby;

