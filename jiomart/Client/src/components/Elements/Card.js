


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import vegIcon from "../../assets/images/icon-veg.svg";
import { FaPlus } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { useCart } from '../../context/CartContext';

export const Card = ({ product, image }) => {

  const BASE_URL = "https://localhost:7151/productImages";
  const { addToCart } = useCart();
  const { productName, price, originalPrice, } = product;



  // Calculate discount percentage
  const discountPercentage = originalPrice && price ? ((originalPrice - price) / originalPrice) * 100 : 0;

  return (
    <div className="max-w-sm bg-white border border-gray-400 rounded-lg pt-4">
      {/* Heart Icon */}
      <IoMdHeartEmpty className='ml-[210px] w-7 h-7 text-gray-400' />

      {/* Product Image */}
      {/* <Link to={`/${product.id}`}>
      <img
        className="w-full h-64 object-contain"
        src={image}
        alt={product.product_name}
      />

      </Link> */}
{/* 
      <Link to={`/productDetails`}>
        <img className="w-full h-64 object-contain" src={`${BASE_URL}${product.imagePath}`} alt="Product" />
      </Link> */}


      <Link to={`/productDetails/${product.id}`}>
  <img
    className="w-full h-64 object-contain"
    src={`${BASE_URL}${product.imagePath}`}
    alt={product.productName}
  />
</Link>

      {/* Product Details */}
      <div className="text-left ml-[0px] p-3">
        <img src={vegIcon} className='pb-2' alt='vegIcon' />
        <p className="text-[13px] font-semibold text-gray-500">{productName}</p>

        {/* Price Section */}
        <div className="flex items-center mt-2">
          <span className="text-lg font-semibold">₹{price}</span>
          <span className="text-gray-500 line-through ml-2">₹{originalPrice}</span>
          {/* Display discount percentage */}
          {discountPercentage > 0 && (
            <span className="ml-2 bg-green-100 text-green-700 text-[10px] px-2 py-1 rounded">
              {Math.round(discountPercentage)}% OFF
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product)}
          className="flex mt-4 w-full pt-[4px] text-[#0c5273] py-1 rounded-[25px] hover: transition justify-between border-1 border-gray-300 pl-[10px] hover:border-[#0078ad]"
        >
          <span>Add</span>
          <FaPlus className="pr-[10px] w-[28px] pt-[4px]" />
        </button>
      </div>
    </div>
  );
};
