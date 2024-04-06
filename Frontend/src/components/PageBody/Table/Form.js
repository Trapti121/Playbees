import React, { useState } from 'react';
import './Form.css';
import { Link } from "react-router-dom";
const Form = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isOrdered, setIsOrdered]= useState('Order');
  const [table, setTable] = useState('');
 const collectData=async()=>{
  console.log(name,email,phoneNumber);
  let result= await fetch('http://localhost:5000/form',{
    method:'post', 
    body:JSON.stringify({name,email,phoneNumber,table}),
    headers:{
      'Content-Type':'application/json'
    },
  })

  result=await result.json();
  console.log(result);
  setTable({table});
  localStorage.setItem('user',JSON.stringify(result));
  if(result){
  setIsOrdered("Ordered");
  }
 }

  return (
    <div className='form'>
      <h3>Table {table}</h3>
      <form>
        <label>Name:
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>Phone Number:
          <input type='tel' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
        <label>Email Address:
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>Table Number:
          <input type='table' value={table} onChange={(e) => setTable(e.target.value)} />
        </label>
        <Link to="/Menu">
          <button onClick={collectData}
            className='button'
          >
            {isOrdered}
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Form;
