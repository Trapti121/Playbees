import React, { useState } from 'react';
import './kitCard.css';
import { Link } from "react-router-dom";

const KitCard = ({ data }) => {
const [status, setStatus] = useState('Processing');
  const handleDoneClick = () => {
    setStatus('Processed');
  };

  return (
    <div className='kitBox'>
      <div className='kit'>
        <div className='kitContent'>
          <p className='tableno'>Table: {data.table}</p>
          <p className='name'> Name: {data.name}</p>
          <p className='userid'> Id: {data._id}</p>
          <p className='orderStatus'>Status: {status}</p>   
        </div>
        <div className='billbtn'>
        <Link to='/Menu/bill'>
          <button onClick={handleDoneClick} className='btn11'> Done </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default KitCard;
