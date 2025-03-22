import { Card } from "../Elements/Card";
import groceriesTitle from "../../assets/groceries/groceriesTitle.webp";
import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";

import GroceriesTitle from "../../assets/groceries/groceriesTitle.webp";
import { FaChevronDown } from "react-icons/fa6";


const categories = [
  'Kitchenware',
  'Home Furnishing',
  'Sports & Fitness',
  'Bags & Travel Luggage',
  'Bathroom & Laundry Accessories',
  'Home Decor',
  'Disposables',
  'Prayer & Spiritual Needs',
  'Tableware'
];
export const HomeLifestyle = ({endPointState,setEndPointState}) => {
   const [homeList, sethomeList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();
    const navigate= useNavigate();

    
  const handleProduct =(product) => {
    navigate(`/HomeProducts/${product.id}`);
  }
  
    useEffect(() => {
      async function fetchProducts() {
        const response = await fetch(`http://localhost:8000/${endPointState}`);
        const data = await response.json()
        sethomeList(data);
      }
      fetchProducts();
    }, []);
  return (
    <div className="flex min-h-screen">
        <div className="flex min-h-screen font-bold ml-[140px]" >
          <div>
            <nav className="p-4 text-sm">
              <ol className="flex items-center w-80 space-x-2 text-gray-600" >
                <li className="flex">
                
                  <Link to="/" className="hover:text-[#0078ad]">
                    Home
                  </Link>
                  <IoChevronForwardOutline className="top-8" />
                </li>
                <li className="flex items-center">
                  <span className="mx-2"></span>
                  <Link to="/categories" className="hover:text-[#0078ad] ">
                    All Categories
                  </Link>
                  <IoChevronForwardOutline />
                </li>
                <li className="flex items-center">
                  <span className="mx-2"></span>
                  <span className="text-gray-900">
                  Home & Lifestyle</span>
                </li>
              </ol>
            </nav>
            <div className="w-64 p-4 bg-white rounded-lg ml-[60px] border-1 border-gray-300 ">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 text-left">Category</h2>
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`flex items-center py-2 cursor-pointer border-b border-b-gray-300 ${selectedCategory === category ? 'text-[#0078ad]' : 'text-gray-500  hover:text-slate-600'}`}
                >
                  <span className="mr-2 text-gray-600">
                    <FaChevronDown />
                  </span>
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4 rounded mb-4" >
         
          <select className="w-40 self-end p-2 border rounded-lg mt-[20px] ml-[530px] font-bold rounded-[25px] text-[12px]">
            <option value="popularity">Sort by: Popularity</option>
            <option value="price">Sort by: Price</option>
          </select>
          <div className="flex min-h-screen mr-[150px]">
            <div className="flex-1 p-3">
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 shadow-[0]">
                  {homeList.map((product) => (
                    <div  key={product.id}  onClick={() => handleProduct(product)}>         
                               <Card product={product} />
                               </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
