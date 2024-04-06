import React, { useState } from 'react';
import './Add.css';
import axios from 'axios';
import { useNavigate} from "react-router-dom";
const Add = () => {
  const navigate = useNavigate();
   const [id, setId] = useState('');  
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice]= useState('');
  // const [img, setImage]= useState();
  const [desc, setDesc] = useState('');
  const [addOrder,setAddOrder]=useState('Submit');

  // const addProduct=async()=>{
  //   console.log(id,title,category,price,desc);
  //   let result= await fetch('http://localhost:5000/add-product',{
  //     method:'post', 
  //     body:JSON.stringify({id,title,category,price,image,desc}),
  //     headers:{
  //       'Content-Type':'application/json'
  //     },
  //   })
  
  //   result=await result.json();
  //   console.log(result);
  //   localStorage.setItem('user',JSON.stringify(result));
  //   if(result){
  //   alert("Product added successfully!");
  //   }
  //  }

  // const uploadImage=(e)=>{
  //   console.log(e.target.files[0]);
  //   setImage(e.target.files[0]);
  // };
  const submitImage=async (e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append("Id",id);
    formData.append("Title",title);
    formData.append("Category",category);
    formData.append("Price",price);
    formData.append("Description",desc);
    let result= await fetch('http://localhost:5000/add-pdata',{
      method:'post', 
      body:JSON.stringify({id,title,category,price,desc}),
      headers:{
        'Content-Type':'application/json'
      },
    })
  
    result=await result.json();
    console.log(result);
    localStorage.setItem('user',JSON.stringify(result));
    if(result){
      alert("Item added Successfully");
      navigate("/Menu");
    }
   };
 
  return (
    <div className='add-form'>
      <h3>Add items</h3>
      <form >
      <label>Id:
          <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <label>Title:
          <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>Category:
          <input type='text' value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
        <label>Price:
          <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <label>Description :
          <input type='text-box' value={desc} onChange={(e) => setDesc(e.target.value)} />
        </label>
        {/* <label>Upload Image :
          <input type='file' accept="image/*" onChange={uploadImage} />
        </label> */}
        

          <button onClick={submitImage}  className='appButton'
          > 
           Add Product
          </button>
    
      </form>
    </div>
  );
};

export default Add;