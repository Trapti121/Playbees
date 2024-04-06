import React from 'react'
import { FaPlusCircle } from 'react-icons/fa';
import { FaMinusCircle } from 'react-icons/fa';
import './Styles/restroCard.css';
const restroCard = ({cardData, deleteProduct,addToOrderList, removeFromOrderList}) => {
  
  return (
    <div className='restro'>
      <div className='imgBox'>
        <img src={cardData.img} alt={cardData.title} className='card-img'/>
      </div>
       <div className='textContent'>
        <h2 className='cardName'> {cardData.title}</h2>
        <div className='foodPrice'>
            <p>price: {cardData.price}</p>
        </div>
        <div className='cardDescription'>
            <p>{cardData.desc}</p>
        </div>
        <div ><button className='operation' onClick={deleteProduct}>Delete</button></div>
        <div className='CartButton'> 
        <p onClick={() => removeFromOrderList(cardData.name)}>
            <FaMinusCircle/>
             </p>  
          <p onClick={() => addToOrderList({id: cardData.id,name: cardData.title, price:cardData.price})}>  
          <FaPlusCircle/>
           </p>  
        </div>
        </div> 
    </div>
  )
}
export default restroCard;
// import React,{useState} from 'react';
// import { useEffect } from 'react';
// import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
// import './Styles/restroCard.css';

// const RestroCard = ({ addToOrderList, removeFromOrderList }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProducts();
//   }, []);

//   const getProducts = async () => {
//     try {
//       let result = await fetch('http://localhost:5000/Menu');
//       if (!result.ok) {
//         throw new Error(`HTTP error! Status: ${result.status}`);
//       }
//       let data = await result.json();
//       setProducts(data);
//       console.log(data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   return (
//     <div className='restro'>
//       {products.map((product) => (
//         <div key={product.id} className='card'>
//           <div className='imgBox'>
//             <img src={product.img} alt={product.title} className='card-img' />
//           </div>
//           <div className='textContent'>
//             <h2 className='cardName'> {product.title}</h2>
//             <div className='foodPrice'>
//               <p>Price: {product.price}</p>
//             </div>
//             <div className='cardDescription'>
//               <p>{product.desc}</p>
//             </div>
//             <div className='CartButton'>
//               <p onClick={() => removeFromOrderList(product.name)}>
//                 <FaMinusCircle />
//               </p>
//               <p
//                 onClick={() =>
//                   addToOrderList({
//                     id: product.id,
//                     name: product.title,
//                     price: product.price,
//                   })
//                 }
//               >
//                 <FaPlusCircle />
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RestroCard;
