import React, { useState,useEffect} from 'react';
import "./TableBody.css";
import Table from "./TableButton"; 
import {Link} from "react-router-dom";
const TableBody = () => {
  const [tableItems, setTableItems]=useState([]);
  // const renderTables = () => {
  //   const tables = [];
  //   for (let i = 1; i <= 10; i++) {
  //     tables.push(<Table key={i} tableNumber={i} />);
  //   }
  //   return tables;
  // };
  useEffect(() => {
    getTables();
  }, []);

  const getTables = async () => {
    try {
      let result = await fetch('http://localhost:5000/table');
      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }
      let data = await result.json();
      setTableItems(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className='Box'>
      <div className='Container'>
        <div className='head'>
          <div className="Size">
            <h2>Tables</h2>
          </div>
          <Link to='/tables/addtable'>
            <button className='btn'>Add Table</button>
          </Link>
        </div>
        
          <hr />
        
        <div className='Tables'>
         {tableItems.map((data,index)=>(
          <Table
          key={data.id}
          data={data}
          />
         )
         )}
        </div>
      </div>
    </div>
  );
}

export default TableBody;
