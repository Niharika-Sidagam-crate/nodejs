// import { useState } from "react";
// import { Link } from "react-router-dom";

// import { useCart } from "../../../context/CartContext";
// export const CartCard = ({ product }) => {
//   const { removeFromCart, addToCart } = useCart(); 
//   const [count, setCount] = useState(1);

//   const increment = () => {
//     setCount(prevCount => prevCount + 1);
//   };

//   const decrement = () => {
//     setCount(prevCount => prevCount - 1);
//   };
//   return (
//     <div className="flex">
//       <div className=" text-left p-4 mb-4 w-[750px] mr-[25px] border-b border-b-gray-200">
//         <div className="flex p-2 pr-2">
//           <p className="text-green-600 text-[10px] bg-green-100 mr-2">Quick</p>
//           <p className="text-[10px]"> Delivery in 10 to 30 mins</p>
//         </div>
//         <p className="text-green-600 text-sm bg-green-100 p-2">
//           Yay! You get FREE delivery with this Basket
//         </p>

//         <div className="flex items-center mt-2">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-12 h-12 mr-4"
//           />
//           <div>
//             <p className="text-sm">{product.name}</p>
//             <p className="text-gray-600 line-through text-xs">₹{product.original_price}</p>
//             <p className="text-black font-bold">₹{product.price}</p>
//           </div>
//         </div>
//         <div className="flex justify-between">
//           <Link to="/">
//           <p className="text-[#0c5273] font-bold mt-4">Save for later</p>
//           </Link>
      
//           <div className="text-center m-8">
//             <div className="flex gap-4">
//               <button
//                 onClick={() => {
//                   // removeFromCart(product);  
//                   decrement();              
//                 }}
//                 className="w-12 h-12 flex items-center justify-center text-xl rounded-full border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
//                 aria-label="Decrease count"
//               >
//                 -
//               </button>
//               <span className="text-xl font-medium w-8 text-center pt-2">{count}</span>
//               <button
//                 onClick={() => {
//                   // addToCart(product);  
//                   increment();         
//                 }}
//                 className="w-12 h-12 flex items-center justify-center text-xl rounded-full border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
//                 aria-label="Increase count"
//               >
//                 +
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../../../context/CartContext";

// export const CartCard = ({ product }) => {
//   const { removeFromCart } = useCart();

//   const [count, setCount] = useState(product.quantity || 1);

//   const increment = () => {
//     setCount(prevCount => prevCount + 1);
//   };

//   const decrement = () => {
//     if (count > 1) {
//       setCount(prevCount => prevCount - 1);
//     } else {
//       removeFromCart(product);
//     }
//   };

//   return (
//     <div className="flex">
//       <div className=" text-left p-4 mb-4 w-[750px] mr-[25px] border-b border-b-gray-200">
//         <div className="flex p-2 pr-2">
//           <p className="text-green-600 text-[10px] bg-green-100 mr-2">Quick</p>
//           <p className="text-[10px]"> Delivery in 10 to 30 mins</p>
//         </div>
//         <p className="text-green-600 text-sm bg-green-100 p-2">
//           Yay! You get FREE delivery with this Basket
//         </p>
//         <div className="flex items-center mt-2">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-12 h-12 mr-4"
//           />
//           <div>
//             <p className="text-sm">{product.name}</p>
//             <p className="text-gray-600 line-through text-xs">₹{product.original_price}</p>
//             <p className="text-black font-bold">₹{product.price}</p>
//           </div>
//         </div>
//         <div className="flex justify-between">
//           <Link to="/">
//             <p className="text-[#0c5273] font-bold mt-4">Save for later</p>
//           </Link>
//           <div className="text-center m-8">
//             <div className="flex gap-4">
//               <button
//                 onClick={decrement}
//                 className="w-12 h-12 flex items-center justify-center text-xl rounded-full border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
//                 aria-label="Decrease count"
//               >
//                 -
//               </button>
//               <span className="text-xl font-medium w-8 text-center pt-2">{count}</span>
//               <button
//                 onClick={increment}
//                 className="w-12 h-12 flex items-center justify-center text-xl rounded-full border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
//                 aria-label="Increase count"
//               >
//                 +
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

export const CartCard = ({ product }) => {
  const { removeFromCart } = useCart(); // Make sure this works properly in your context

  const [count, setCount] = useState(product.quantity || 1); // Use product quantity or default to 1

  const increment = () => {
    setCount(prevCount => prevCount + 1); // Increment the count
  };

  const decrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1); // Decrease the count
    } else {
      removeFromCart(product); // If count reaches 1, remove the product from the cart
    }
  };

  // To avoid rendering after the product is removed from the cart, you could return null if no product exists.
  if (!product) {
    return null;
  }

  return (
    <div className="flex">
      <div className="text-left p-4 mb-4 w-[750px] mr-[25px] border-b border-b-gray-200">
        <div className="flex p-2 pr-2">
          <p className="text-green-600 text-[10px] bg-green-100 mr-2">Quick</p>
          <p className="text-[10px]"> Delivery in 10 to 30 mins</p>
        </div>
        <p className="text-green-600 text-sm bg-green-100 p-2">
          Yay! You get FREE delivery with this Basket
        </p>
        <div className="flex items-center mt-2">
          <img
            src={product.image}
            alt={product.name}
            className="w-12 h-12 mr-4"
          />
          <div>
            <p className="text-sm">{product.name}</p>
            <p className="text-gray-600 line-through text-xs">₹{product.original_price}</p>
            <p className="text-black font-bold">₹{product.price}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <Link to="/">
            <p className="text-[#0c5273] font-bold mt-4">Save for later</p>
          </Link>
          <div className="text-center m-8">
            <div className="flex gap-4">
              <button
                onClick={decrement}
                className="w-12 h-12 flex items-center justify-center text-xl rounded-full border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
                aria-label="Decrease count"
              >
                -
              </button>
              <span className="text-xl font-medium w-8 text-center pt-2">{count}</span>
              <button
                onClick={increment}
                className="w-12 h-12 flex items-center justify-center text-xl rounded-full border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
                aria-label="Increase count"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
