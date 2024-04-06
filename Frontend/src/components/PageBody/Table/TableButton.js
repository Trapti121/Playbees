import React, { useState } from 'react';
import './TableButton.css';
import { Link } from "react-router-dom";
const Table = ({data}) => {
const [btnBook, setBtnBook]= useState('Book it')

  return (
    <div className='tableBox'>
      <div className='tableCard'>
        <div className='content'>
        <h2 className='head'>Table {data.id}</h2>
        <p className='capacity'>Capacity: {data.Capacity}</p>
        <p className='status'status>Status: {data.Status}</p>
        </div>
        <Link to="/Form">
          <button
            className='buttons'
            onClick={() => {
              setBtnBook('Booked');
            }}
          >
            {btnBook}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Table;

