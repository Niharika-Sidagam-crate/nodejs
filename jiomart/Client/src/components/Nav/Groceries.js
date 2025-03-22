

// import { Card } from "../Elements/Card";
// import groceriesTitle from "../../assets/groceries/groceriesTitle.webp";
// import React, { useState, useEffect } from 'react';
// import { IoChevronForwardOutline } from "react-icons/io5";
// import { Link, useNavigate } from "react-router-dom";
// import { FaChevronDown } from "react-icons/fa6";
// import GroceriesTitle from "../../assets/groceries/groceriesTitle.webp";

// const categories = [
//   'Biscuits, Drinks',
//   'Fruits & Vegetables',
//   'Cooking Essentials',
//   'Dairy & Bakery',
//   'Personal Care',
//   'Beauty',
//   'Mom & Baby Care',
//   'Home Care',
//   'Kitchenware'
// ];

// export const Groceries = ({endPointState,setEndPointState}) => {
//   const [groceryList, setGroceryList] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState();
//   const [selectedOption, setSelectedOption] = useState('Popularity'); 
//   const [isCardVisible, setIsCardVisible] = useState(false);
//   const navigate= useNavigate();

//   const handleProduct =(product) => {
//     navigate(`/groceries/${product.id}`);
//   }

//   // Fetching data for grocery list
//   useEffect(() => {
//     async function fetchProducts() {
//       const response = await fetch(`http://localhost:8000/${endPointState}`);
//       const data = await response.json();
//       setGroceryList(data);
//     }

//     fetchProducts();
//   }, []);

//   // Handle select change
//   const handleSelectChange = (event) => {
//     const value = event.target.value;
//     setSelectedOption(value);
//     if (value === 'Popularity') {
//       setIsCardVisible(true);
//     } else {
//       setIsCardVisible(false); 
//     }
//   };

//   // Handle radio button change
//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value); 
//   };

//   // Sort the grocery list based on the selected option
//   const sortedGroceryList = () => {
//     let sortedList = [...groceryList];
//     switch (selectedOption) {
//       case "Price: High to Low":
//         sortedList.sort((a, b) => b.price - a.price);
//         break;
//       case "Price: Low to High":
//         sortedList.sort((a, b) => a.price - b.price);
//         break;
//       case "Discount":
//         sortedList.sort((a, b) => b.discount - a.discount); 
//         break;
//       case "All Products":
//         break;
//       case "Popularity":
//         sortedList.sort((a, b) => b.popularity - a.popularity); 
//         break;
//       default:
//         break;
//     }
//     return sortedList;
//   };

//   return (
//     <div className="flex min-h-screen ml-[140px]">
//       <div className="flex min-h-screen font-bold ">
//         <div>
//           <nav className="p-4 text-sm">
//             <ol className="flex items-center w-80 space-x-2 text-gray-600">
//               <li className="flex">
//                 <Link to="/" className="hover:text-[#0078ad]">
//                   Home
//                 </Link>
//                 <IoChevronForwardOutline className="top-8" />
//               </li>
//               <li className="flex items-center">
//                 <span className="mx-2"></span>
//                 <Link to="/categories" className="hover:text-[#0078ad]">
//                   All Categories
//                 </Link>
//                 <IoChevronForwardOutline />
//               </li>
//               <li className="flex items-center">
//                 <span className="mx-2"></span>
//                 <span className="text-gray-900">Groceries</span>
//               </li>
//             </ol>
//           </nav>

//           <div className="w-64 p-4 bg-white rounded-lg ml-[60px] border-1 border-gray-300">
//             <h2 className="text-2xl font-bold text-slate-800 mb-4 text-left">Category</h2>
//             {categories.map((category, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center py-2 cursor-pointer border-b border-b-gray-300 ${selectedCategory === category ? 'text-[#0078ad]' : 'text-gray-500 hover:text-slate-600'}`}
//               >
//                 <span className="mr-2 text-gray-600">
//                   <FaChevronDown />
//                 </span>
//                 {category}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="p-4 rounded mb-4">
//         <img src={GroceriesTitle} className="mr-4 w-20 h-20 rounded-lg w-[850px] h-[130px] mt-[40px]" alt="GroceriesTitle" />
        
//         {/* Sort Dropdown */}
//         <select
//           className="w-40 self-end p-2 border rounded-lg mt-[20px] ml-[530px] font-bold rounded-[25px] text-[12px]"
//           onChange={handleSelectChange}
//           value={selectedOption}
//         >
//           <option value="Popularity">Sort by: Popularity</option>
//           <option value="Price: High to Low">Sort by: Price (High to Low)</option>
//           <option value="Price: Low to High">Sort by: Price (Low to High)</option>
//           <option value="Discount">Sort by: Discount</option>
//           <option value="All Products">All Products</option>
//         </select>

//         {/* Radio Button Card (only shown when "Popularity" is selected) */}
//         {isCardVisible && (
//           <div className="p-4 w-[300px] bg-white border border-gray-200 rounded-lg mt-2">
//             <div className="space-y-2">
//               {["Popularity", "Price: High to Low", "Price: Low to High", "Discount", "All Products"].map((option) => (
//                 <label className="flex items-center" key={option}>
//                   <input
//                     type="radio"
//                     value={option}
//                     checked={selectedOption === option}
//                     onChange={handleOptionChange}
//                     className="form-radio h-4 w-4 text-blue-600"
//                   />
//                   <span className="ml-2 text-gray-700">{option}</span>
//                 </label>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Display products */}
//         <div className="flex min-h-screen mr-[150px]">
//           <div className="flex-1 p-3">
//             <div className="flex flex-col gap-4">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 shadow-[0]">
//                 {sortedGroceryList().map((product) => (
                  
//                   <div key={product.id}  onClick={() => handleProduct(product)}>
//                        <Card product={product} />
//                   </div>
               
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };




import { Card } from "../Elements/Card";
import GroceriesTitle from "../../assets/groceries/groceriesTitle.webp";
import React, { useState, useEffect } from 'react';
import { IoChevronForwardOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";

export const Groceries = ({ endPointState, setEndPointState }) => {
  const [groceryList, setGroceryList] = useState([]);
  const [subgroceryList, setSubGroceryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedOption, setSelectedOption] = useState('Popularity');
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [productsImage, setProductsImage] = useState([]);
  const navigate = useNavigate();

  const handleProduct = (product) => {
    navigate(`/groceries/${product.id}`);
  };


  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };
  
  // Fetching data for grocery list
  useEffect(() => {
    async function fetchProducts() {
      console.log(endPointState, "endpointstate....");
  
      if (endPointState === "Groceries") {
        console.log("entered...");
  
        const response = await fetch(`http://localhost:5000/product/category/${endPointState}`);
        const data = await response.json();
        console.log(data.products, "products data");
  
        try {
          const images = data.products.map(product => {
            const byteArray = new Uint8Array(product.image_data.data);
            const base64String = arrayBufferToBase64(byteArray);
            const base64Image = `data:image/webp;base64,${base64String}`;
            console.log(base64Image);
            return base64Image;
          });
          setGroceryList(data.products); 
          setProductsImage(images);  
  
        } catch (error) {
          console.error('Error fetching products Images:', error);
        }
  
      } else {
        console.log("at else block");
        const response = await fetch(`http://localhost:5000/product/category/${endPointState}`);
        const data = await response.json();
        setGroceryList(data);
      }
    }
  
    fetchProducts();
  }, [endPointState]);
  
  
  

  // Fetching data for subcategories list
  useEffect(() => {
    async function fetchSubcategories() {
      
      const response = await fetch(` http://localhost:5000/Subcategory/${endPointState}`);
      const data = await response.json();
      setSubGroceryList(data);
    }

    fetchSubcategories();
  }, [endPointState]);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (value === 'Popularity') {
      setIsCardVisible(true);
    } else {
      setIsCardVisible(false);
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const sortedGroceryList = () => {
    let sortedList = [...groceryList];
    switch (selectedOption) {
      case "Price: High to Low":
        sortedList.sort((a, b) => b.price - a.price);
        break;
      case "Price: Low to High":
        sortedList.sort((a, b) => a.price - b.price);
        break;
      case "Discount":
        sortedList.sort((a, b) => b.discount - a.discount);
        break;
      case "All Products":
        break;
      case "Popularity":
        sortedList.sort((a, b) => b.popularity - a.popularity);
        break;
      default:
        break;
    }
    return sortedList;
  };

  return (
    <div className="flex min-h-screen ml-[140px]">
      <div className="flex min-h-screen font-bold ">
        <div>
          <nav className="p-4 text-sm">
            <ol className="flex items-center w-80 space-x-2 text-gray-600">
              <li className="flex">
                <Link to="/" className="hover:text-[#0078ad]">Home</Link>
                <IoChevronForwardOutline className="top-8" />
              </li>
              <li className="flex items-center">
                <span className="mx-2"></span>
                <Link to="/categories" className="hover:text-[#0078ad]">All Categories</Link>
                <IoChevronForwardOutline />
              </li>
              <li className="flex items-center">
                <span className="mx-2"></span>
                <span className="text-gray-900">Groceries</span>
              </li>
            </ol>
          </nav>

          {/* Category Sidebar */}
          <div className="w-64 p-4 bg-white rounded-lg ml-[60px] border-1 border-gray-300">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 text-left">Category</h2>

            {/* Map subgroceryList */}
            {subgroceryList.length > 0 ? (
              subgroceryList.map((subcategory, index) => (
                <div
                  key={index}
                  className={`flex items-center py-2 cursor-pointer border-b border-b-gray-300 ${
                    selectedCategory === subcategory.Subcategory_name ? 'text-[#0078ad]' : 'text-gray-500 hover:text-slate-600'
                  }`}
                  onClick={() => setSelectedCategory(subcategory.Subcategory_name)}
                >
                  <span className="mr-2 text-gray-600">
                    <FaChevronDown />
                  </span>
                  {subcategory.Subcategory_name}
                
                </div>
                
              ))
            ) : (
              <div className="text-gray-500">No subcategories available.</div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 rounded mb-4">
        <img src={GroceriesTitle} className="mr-4 w-20 h-20 rounded-lg w-[850px] h-[130px] mt-[40px]" alt="GroceriesTitle" />

        {/* Sort Dropdown */}
        <select
          className="w-40 self-end p-2 border rounded-lg mt-[20px] ml-[530px] font-bold rounded-[25px] text-[12px]"
          onChange={handleSelectChange}
          value={selectedOption}
        >
          <option value="Popularity">Sort by: Popularity</option>
          <option value="Price: High to Low">Sort by: Price (High to Low)</option>
          <option value="Price: Low to High">Sort by: Price (Low to High)</option>
          <option value="Discount">Sort by: Discount</option>
          <option value="All Products">All Products</option>
        </select>

        {/* Display Products */}
        <div className="flex min-h-screen mr-[150px]">
          <div className="flex-1 p-3">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 shadow-[0]">
                {sortedGroceryList().map((product, index) => (
                  <div key={product.id} onClick={() => handleProduct(product)}>
                    <Card product={product}   image={productsImage[index]} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
