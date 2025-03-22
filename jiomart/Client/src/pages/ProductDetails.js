// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useCart } from '../context/CartContext';

// import { Wishlist } from './Whishlist/Wishlist';

// export const ProductDetails = ({endPointState,setEndPointState}) => {
//   const { addToCart } = useCart();
//   const { id } = useParams();  

//   const [product, setProduct] = useState(null);  

//   useEffect(() => {
//     async function fetchProductDetails() {
//       try {
//         const response = await fetch(`http://localhost:8000/${endPointState}/${id}`);  
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error('Error fetching product details:', error);
//       }
//     }

//     fetchProductDetails();  
//   }, [id]);

//   if (!product) {
//     return (
//       <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-4">
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex justify-center items-center max-w-3xl bg-white p-6 border border-gray-200 rounded-lg  mx-auto m-[40px]">
      
//       <div className="flex items-center w-full">
//         {product.image && (
//           <img 
//             src={product.image} 
//             alt={product.name} 
//             className="w-64 h-64 object-contain mb-4 rounded-lg  border border-gray-200" 
//           />
//         )}
        
//         <div className="mt-4 text-center">
//           <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
//           {/* <div className="flex items-center my-2">
//                 <Rating rating={rating}/>
//             </div> */}
//           <p className="mt-2 text-xl font-bold text-gray-900">
//             ₹{product.price}{" "}
//             <span className="text-sm text-gray-500 line-through">₹{product.original_price}</span>{" "}
//             <span className="text-green-500 text-sm">{product.discount}% Off</span>
//           </p>
//           <p className="text-gray-700 mt-1">EMI Available from ₹{product.emi}</p>
//           <p className="text-green-600 font-medium mt-1">
//             {product.bankDiscount} Off on {product.bankOffers}
//           </p>
//           <p className="text-red-500 font-semibold mt-2">⚡ {product.deal}</p>
//           <p className="text-gray-600 mt-2">Warranty: {product.warranty}</p>
          
//           {/* Add to Cart button */}
//           <button 
//             onClick={() => addToCart(product)} 
//             className="mt-4 w-40 bg-[#0078ad] text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Add to Cart

            
//           </button>
//         </div>
//       </div>

//       <Wishlist />
//     </div>
//   );
// };



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';


export const ProductDetails = ({endPointState,setEndPointState}) => {
  const { addToCart } = useCart();
  const { id } = useParams();  

  const [product, setProduct] = useState(null);  

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        // const response = await fetch(`http://localhost:8000/${endPointState}/${id}`); 
        // const response = await fetch(`http://localhost:5000/products/category/${endPointState}/${id}`); 
        const response = await fetch(`http://localhost:5000/products/category/${endPointState}/${id}`); 
        
        const data = await response.json();
        setProduct(data);
        console.log(endPointState, "hrehr");
        console.log(data, "rtgdertg");
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    }

    fetchProductDetails();  
  }, [id]);

  if (!product) {
    return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-4">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center max-w-3xl bg-white p-6 border border-gray-200 rounded-lg  mx-auto m-[40px]">
      
      <div className="flex items-center w-full">
        {product.image && (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-64 h-64 object-contain mb-4 rounded-lg  border border-gray-200" 
          />
        )}
        
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
          {/* <div className="flex items-center my-2">
                <Rating rating={rating}/>
            </div> */}
          <p className="mt-2 text-xl font-bold text-gray-900">
            ₹{product.price}{" "}
            <span className="text-sm text-gray-500 line-through">₹{product.original_price}</span>{" "}
            <span className="text-green-500 text-sm">{product.discount}% Off</span>
          </p>
          <p className="text-gray-700 mt-1">EMI Available from ₹{product.emi}</p>
          <p className="text-green-600 font-medium mt-1">
            {product.bankDiscount} Off on {product.bankOffers}
          </p>
          <p className="text-red-500 font-semibold mt-2">⚡ {product.deal}</p>
          <p className="text-gray-600 mt-2">Warranty: {product.warranty}</p>
          
          {/* Add to Cart button */}
          <button 
            onClick={() => addToCart(product)} 
            className="mt-4 w-40 bg-[#0078ad] text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart

          </button>
        </div>
      </div>
    </div>
  );
};

