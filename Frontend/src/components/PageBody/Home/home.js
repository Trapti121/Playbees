import React from 'react'
import './home.css';
import {Link} from "react-router-dom";
const home = () => {
  return (
   <>
    <div className='HomeContainer'>
     </div>
    <div>
      <h1 className='H1'> Welcome To Playbees</h1>
      <h2 className='H2'> Restaurant</h2>
      <Link to ='./tables'>
      <button className='toTables'> BOOK TABLES</button>
      </Link>
    </div>
     </>
  )
}

export default home
