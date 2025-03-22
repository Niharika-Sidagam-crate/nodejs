import React from 'react'

export const GroceriesList = () => {
  return (
    <div>GroceriesList

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-4">
    
    {/* Product Image */}
    <img
      className="w-full h-64 object-contain"
      src="" 
      alt="product"
    />

    {/* Product Details */}
    <div className="p-4">
      <h2 className="text-lg font-semibold text-gray-900">Pepsi 2.25L</h2>
      <p className="text-gray-600">Refreshing Soft Drink</p>

      {/* Price Section */}
      <div className="flex items-center mt-2">
        <span className="text-xl font-bold text-green-600">₹61.00</span>
        <span className="text-gray-500 line-through ml-2">₹100.00</span>
        <span className="ml-2 bg-green-100 text-green-600 text-sm px-2 py-1 rounded">
          39% OFF
        </span>
      </div>

      {/* Add to Cart Button */}
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </div>
  </div>
    </div>
  )
}
