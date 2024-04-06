import React, { useState, useEffect } from 'react';
import './menu2.css';

const Menu2 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      let result = await fetch('http://localhost:5000/Menu');
      if (!result.ok) {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }
      result = await result.json();
      setProducts(result);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  console.log("Products", products);

  return (
    <div className='Menu-list'>
     <h3>Menu</h3>
     <ul>
      <li>Id</li>
      <li>Title</li>
      <li>Category</li>
      <li>Price</li>
     </ul>
     {products.map((product,index) => (
       <ul key={product._id}>
         <li>{index +1}</li>
         <li>{product.title}</li>
         <li>{product.category}</li>
         <li>{product.price}</li>

       </ul>
     ))}
    </div>
  );
};

export default Menu2;

