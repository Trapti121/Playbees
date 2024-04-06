import React, { useState } from 'react';
import './Form.css';
import { Link , useNavigate} from "react-router-dom";
const AddTable = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [Capacity, setCapacity] = useState('');
  const [Status, setStatus] = useState('');
 const addTable=async()=>{
  console.log(id,Capacity,Status);
  let result= await fetch('http://localhost:5000/add-table',{
    method:'post', 
    body:JSON.stringify({id,Capacity,Status}),
    headers:{
      'Content-Type':'application/json'
    },
  })

  result=await result.json();
  console.log(result);
  localStorage.setItem('user',JSON.stringify(result));
  if(result){
    alert("Table added Successfully");
    navigate("/tables");
  }
 }

  return (
    <div className='form'>
      <h3>Enter Table Info</h3>
      <form>
        <label>Number:
          <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <label>Capacity:
          <input type='text' value={Capacity} onChange={(e) => setCapacity(e.target.value)} />
        </label>
        <label>Status:
          <input type='text' value={Status} onChange={(e) => setStatus(e.target.value)} />
        </label>
        <Link to="/tables">
          <button onClick={addTable}
            className='button'
          >
           Add table
          </button>
        </Link>
      </form>
    </div>
  );
};

export default AddTable;