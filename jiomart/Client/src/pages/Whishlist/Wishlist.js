
import React, { useState } from 'react';

export const Wishlist = () => {
  const [quantities, setQuantities] = useState({
    tea: 0,
    atta: 0,
    oil: 4
  });

  const incrementQuantity = (product) => {
    setQuantities(prev => ({
      ...prev,
      [product]: prev[product] + 1
    }));
  };

  const decrementQuantity = (product) => {
    if (quantities[product] > 0) {
      setQuantities(prev => ({
        ...prev,
        [product]: prev[product] - 1
      }));
    }
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto p-4">
        <div className="flex items-center gap-2 mb-4">
          <a href="#" className="text-teal-700 font-medium">My Account</a>
          <span className="text-gray-500">&gt;</span>
          <span className="text-gray-700 font-medium">My Wishlist</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-6">Your favourited products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tata Tea Product */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 relative">
            {/* Heart icon using Tailwind only */}
            <div className="absolute top-4 right-4 text-red-400">
              <div className="w-6 h-6 text-red-400 flex items-center justify-center">
                ❤️
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <img 
                src="/api/placeholder/180/180" 
                alt="Tata Tea Premium" 
                className="h-48 object-contain"
              />
            </div>
            <h3 className="font-medium text-gray-800 mb-1">Tata Tea Premium Desh Ki Chai 1 kg</h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-lg">₹452.00</span>
              <span className="text-gray-400 line-through text-sm">₹600.00</span>
              <span className="text-green-600 text-sm font-medium">24% Off</span>
            </div>
            <button className="text-teal-700 border border-teal-700 rounded px-4 py-2 w-full flex justify-between items-center">
              Add
              <span className="text-teal-700 font-bold text-lg">+</span>
            </button>
          </div>
          
          {/* Chakki Atta Product */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 relative">
            {/* Heart icon using Tailwind only */}
            <div className="absolute top-4 right-4 text-red-400">
              <div className="w-6 h-6 text-red-400 flex items-center justify-center">
                ❤️
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <img 
                src="/api/placeholder/180/180" 
                alt="Chakki Atta" 
                className="h-48 object-contain"
              />
            </div>
            <h3 className="font-medium text-gray-800 mb-1">Good Life Chakki Atta 10 kg</h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-lg">₹395.00</span>
              <span className="text-gray-400 line-through text-sm">₹450.00</span>
              <span className="text-green-600 text-sm font-medium">12% Off</span>
            </div>
            <button className="text-teal-700 border border-teal-700 rounded px-4 py-2 w-full flex justify-between items-center">
              Add
              <span className="text-teal-700 font-bold text-lg">+</span>
            </button>
          </div>
          
          {/* Sunflower Oil Product */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 relative">
            {/* Heart icon using Tailwind only */}
            <div className="absolute top-4 right-4 text-red-400">
              <div className="w-6 h-6 text-red-400 flex items-center justify-center">
                ❤️
              </div>
            </div>
            <div className="flex justify-center mb-4">
              <img 
                src="/api/placeholder/180/180" 
                alt="Fortune Sunlite Oil" 
                className="h-48 object-contain"
              />
            </div>
            <h3 className="font-medium text-gray-800 mb-1">Fortune Sunlite Refined Sunflower Oil 1 L</h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-lg">₹157.00</span>
              <span className="text-gray-400 line-through text-sm">₹195.00</span>
              <span className="text-green-600 text-sm font-medium">19% Off</span>
            </div>
            <div className="flex items-center justify-end gap-4">
              <button 
                onClick={() => decrementQuantity('oil')} 
                className="text-gray-600 border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
              >
                <span className="text-lg font-medium">-</span>
              </button>
              <span className="w-4 text-center font-medium">{quantities.oil}</span>
              <button 
                onClick={() => incrementQuantity('oil')} 
                className="text-gray-600 border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
              >
                <span className="text-lg font-medium">+</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

