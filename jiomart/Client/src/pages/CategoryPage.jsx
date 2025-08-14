import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {Card} from "../components/Elements/Card";
import GroceriesTitle from "../assets/groceries/groceriesTitle.webp";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [categoryId, setCategoryId] = useState(null);
  const [subcategories, setSubcategories] = useState([]);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
    const [isCardVisible, setIsCardVisible] = useState(false);
  const [selectedoption, setSelectedOption] = useState("Popularity");
//   const [sortedList, setSortedList] 
  const navigate = useNavigate();
    const handleProduct = (product) => {
    navigate(`/groceries/${product.id}`);
  };


  // Step 1: Get all categories
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch(`https://localhost:7151/api/Category`);
        const data = await res.json();

        const matchedCategory = data.find(
          (cat) => cat.categoryName.toLowerCase() === categoryName.toLowerCase()
        );

        if (matchedCategory) {
          setCategoryId(matchedCategory.categoryId);
        } else {
          setError("Category not found.");
        }
      } catch (err) {
        setError("Error fetching categories.");
      }
    }

    fetchCategories();
  }, [categoryName]);

  // Step 2: Fetch subcategories using categoryId
  useEffect(() => {
    if (!categoryId) return;
    async function fetchSubcategories() {
      try {
        const res = await fetch(`https://localhost:7151/api/Subcategory/category/${categoryId}`);
        const data = await res.json();
        // console.log(data, "Subcategorydata")
        setSubcategories(data);
      } catch (err) {
        setError("Error fetching subcategories.");
      }
    }
    fetchSubcategories();
  }, [categoryId]);

    useEffect(() => {
    if(!categoryId) return;
    const fetchProducts = async() => {
        try{
            const response = await fetch(`https://localhost:7151/api/Product/Bycategory/${categoryId}`);
            const data = await response.json();
            console.log(data, "products");
            setProducts(data);
        } catch {
            setError("Error fetching products");
        }
    }
    fetchProducts();
  }, [categoryId]);




  if (error) return <p className="text-red-500 p-4">{error}</p>;
  if (!categoryId) return <p className="p-4">Loading category...</p>;
//   const sortedProductsList = () => {
//     let sortedList = [...products];
//     switch (selectedoption) {
//         case "Price : High to Low":
//             sortedList.sort((a,b) => b.price )

//     }
//   }

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
    const sortedProductsList = () => {
    let sortedList = [...products];
    switch (selectedoption) {
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
    <div>
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
                    <span className="text-gray-900">{categoryName}</span>
                  </li>
                </ol>
              </nav>
    
              {/* Category Sidebar */}
              <div className="w-64 p-4 bg-white rounded-lg ml-[60px] border-1 border-gray-300">
                <h2 className="text-2xl font-bold text-slate-800 mb-4 text-left">Category</h2>
    
                {/* Map subgroceryList */}
                {subcategories.length > 0 ? (
                  subcategories.map((subcategory, index) => (
                    <div
                      key={index}
                      className={`flex items-center py-2 cursor-pointer border-b border-b-gray-300`}
                    //   onClick={() => setSelectedCategory(subcategory.Subcategory_name)}  
                    >
                      <span className="mr-2 text-gray-600">
                        <FaChevronDown />
                      </span>
                      {subcategory.subCategoryName}
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
              value={selectedoption}
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
                    {sortedProductsList().map((product, index) => (
                      <div key={product.id} 
                    //   onClick={() => handleProduct(product)}
                      >
                        <Card product={product}   
                        // image={productsImage[index]} 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CategoryPage;
