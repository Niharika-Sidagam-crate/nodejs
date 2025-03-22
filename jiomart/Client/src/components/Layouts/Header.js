import { IoIosSearch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Logo from "../../assets/Jiomartlogo.png";
import { PiShoppingCart } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";


export const Header = ({endPointState,setEndPointState}) => {
  const { total, cartList } = useCart();
  return (
    <header className="bg-[#0078ad] text-white">
      <div className="container  m-auto mx-auto px-8 py-2" >

        <div className="container flex items-center justify-between px-8 py-3" >
          <div className="flex items-center gap-4 ml-[130px]">
            <Link to="/" className="flex items-center gap-2">
              <img src={Logo} className="mr- w-9 h-auto" alt="JioMart" />
              <span className="text-xl font-bold">JioMart</span>
            </Link>
            <div className="flex items-center gap-2 text-sm">
              <FaLocationDot />
              <span className="flex items-center gap-1">Deliver to Mumbai 400020</span>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center px-6 mr-5">
            <div className="relative w-full max-w-2xl">
              <input
                type="search"
                placeholder="Search JioMart"
                className="w-full rounded-md bg-white/10 px-4 py-2 text-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <IoIosSearch className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-white/70" />
            </div>
          </div>
          <div className="flex items-center gap-4 mr-[110px]">
            <button className="flex items-center gap-2">
              <Link to="/cartPage">
                <div className='relative'>
                  <button className="flex items-center gap-2 px-2">
                    <PiShoppingCart className="h-6 w-6" />
                    <span className="text-white text-sm absolute -top-2 right-2 bg-red-700 px-1.5 rounded-full ">{cartList.length}</span>
                  </button>
                </div>
              </Link>
            </button>
            <button className="flex items-center gap-2">
              <FaUserCircle className="h-5 w-5" />
              <Link to="signin">
              <span>Sign In</span>
              </Link>
              
            </button>
            <button className="lg:hidden">
              <GiHamburgerMenu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <nav className="border-t border-white/10 bg-[#0c5273] text-white">
        <div className="container flex items-center justify-between px-8 py-2">
          <ul className="container flex flex-wrap items-center gap-10 px-4 py-2 ml-[140px]">
            <div className="groceries-menu relative inline-block group">
              <Link to={`/groceries`}>
                <span onClick={()=>setEndPointState("Groceries")} className="cursor-pointer text-sm hover:text-white/80">Groceries</span>
              </Link>

              {/* Dropdown menu, visible on hover */}
              <div className="groceries-dropdown text-sm hidden absolute mt-2 bg-white shadow-lg  p-2.5 z-50 group-hover:block w-72 border border-gray-300">
                <ul className="space-y-2 text-left font-semibold">
                  <li className="text-gray-700 hover:text-green-600card ">Biscuits, Drinks & Packaged Foods</li>
                  <li className="text-gray-700 hover:text-green-600">Fruits & Vegetables</li>
                  <li className="text-gray-700 hover:text-green-600">Cooking Essentials</li>
                  <li className="text-gray-700 hover:text-green-600">Dairy & Bakery</li>
                  <li className="text-gray-700 hover:text-green-600">Personal Care</li>
                  <li className="text-gray-700 hover:text-green-600">Beauty</li>
                  <li className="text-gray-700 hover:text-green-600">Mom & Baby Care</li>
                  <li className="text-gray-700 hover:text-green-600">Home Care</li>
                  <li className="text-gray-700 hover:text-green-600">Kitchenware</li>
                  <li className="text-gray-700 hover:text-green-600">Tableware</li>
                </ul>
              </div>
            </div>

            <div className="groceries-menu relative inline-block group">
              <Link to={`/HomeLifestyle`} onClick={()=>setEndPointState("HomeProducts")}>
                <span  className="cursor-pointer text-sm hover:text-white/80" >Home & Lifestyle</span>
              </Link>
              {/* Dropdown menu, visible on hover */}
              <div className="groceries-dropdown text-sm hidden absolute mt-2 bg-white shadow-lg  p-2.5 z-50 group-hover:block w-72 border border-gray-300">
                <ul className="space-y-2 text-left font-semibold">
                  <li className="text-gray-700 hover:text-green-600card ">Biscuits, Drinks & Packaged Foods</li>
                  <li className="text-gray-700 hover:text-green-600">Fruits & Vegetables</li>
                  <li className="text-gray-700 hover:text-green-600">Cooking Essentials</li>
                  <li className="text-gray-700 hover:text-green-600">Dairy & Bakery</li>
                  <li className="text-gray-700 hover:text-green-600">Personal Care</li>
                  <li className="text-gray-700 hover:text-green-600">Beauty</li>
                  <li className="text-gray-700 hover:text-green-600">Mom & Baby Care</li>
                  <li className="text-gray-700 hover:text-green-600">Home Care</li>
                  <li className="text-gray-700 hover:text-green-600">Kitchenware</li>
                  <li className="text-gray-700 hover:text-green-600">Tableware</li>
                </ul>
              </div>

            </div>

            <div className="groceries-menu relative inline-block group">
              <Link to={`/Electronics`}  onClick={()=>setEndPointState("Electronics")}>
                <span className="cursor-pointer text-sm hover:text-white/80">Electronics</span>
              </Link>
              {/* Dropdown menu, visible on hover */}
              <div className="groceries-dropdown text-sm hidden absolute mt-2 bg-white shadow-lg  p-2.5 z-50 group-hover:block w-72 border border-gray-300">
                <ul className="space-y-2 text-left font-semibold">
                  <li className="text-gray-700 hover:text-green-600card ">Biscuits, Drinks & Packaged Foods</li>
                  <li className="text-gray-700 hover:text-green-600">Fruits & Vegetables</li>
                  <li className="text-gray-700 hover:text-green-600">Cooking Essentials</li>
                  <li className="text-gray-700 hover:text-green-600">Dairy & Bakery</li>
                  <li className="text-gray-700 hover:text-green-600">Personal Care</li>
                  <li className="text-gray-700 hover:text-green-600">Beauty</li>
                  <li className="text-gray-700 hover:text-green-600">Mom & Baby Care</li>
                  <li className="text-gray-700 hover:text-green-600">Home Care</li>
                  <li className="text-gray-700 hover:text-green-600">Kitchenware</li>
                  <li className="text-gray-700 hover:text-green-600">Tableware</li>
                </ul>
              </div>
            </div>


            <div className="groceries-menu relative inline-block group">
              <Link to={`/Supplies`}>
                <span className="cursor-pointer text-sm hover:text-white/80">Industrial & Professional Supplies</span>
              </Link>
              {/* Dropdown menu, visible on hover */}
              <div className="groceries-dropdown text-sm hidden absolute mt-2 bg-white shadow-lg  p-2.5 z-50 group-hover:block w-72 border border-gray-300">
                <ul className="space-y-2 text-left font-semibold">
                  <li className="text-gray-700 hover:text-green-600card ">Biscuits, Drinks & Packaged Foods</li>
                  <li className="text-gray-700 hover:text-green-600">Fruits & Vegetables</li>
                  <li className="text-gray-700 hover:text-green-600">Cooking Essentials</li>
                  <li className="text-gray-700 hover:text-green-600">Dairy & Bakery</li>
                  <li className="text-gray-700 hover:text-green-600">Personal Care</li>
                  <li className="text-gray-700 hover:text-green-600">Beauty</li>
                  <li className="text-gray-700 hover:text-green-600">Mom & Baby Care</li>
                  <li className="text-gray-700 hover:text-green-600">Home Care</li>
                  <li className="text-gray-700 hover:text-green-600">Kitchenware</li>
                  <li className="text-gray-700 hover:text-green-600">Tableware</li>
                </ul>
              </div>
            </div>

            <div className="groceries-menu relative inline-block group">
              <Link to={`/Jewellery`}>
                <span className="cursor-pointer text-sm hover:text-white/80">Precious Jewellery</span>
              </Link>
              {/* Dropdown menu, visible on hover */}
              <div className="groceries-dropdown text-sm hidden absolute mt-2 bg-white shadow-lg  p-2.5 z-50 group-hover:block w-72 border border-gray-300">
                <ul className="space-y-2 text-left font-semibold">
                  <li className="text-gray-700 hover:text-green-600card ">Biscuits, Drinks & Packaged Foods</li>
                  <li className="text-gray-700 hover:text-green-600">Fruits & Vegetables</li>
                  <li className="text-gray-700 hover:text-green-600">Cooking Essentials</li>
                  <li className="text-gray-700 hover:text-green-600">Dairy & Bakery</li>
                  <li className="text-gray-700 hover:text-green-600">Personal Care</li>
                  <li className="text-gray-700 hover:text-green-600">Beauty</li>
                  <li className="text-gray-700 hover:text-green-600">Mom & Baby Care</li>
                  <li className="text-gray-700 hover:text-green-600">Home Care</li>
                  <li className="text-gray-700 hover:text-green-600">Kitchenware</li>
                  <li className="text-gray-700 hover:text-green-600">Tableware</li>
                </ul>
              </div>
            </div>

            <div className="groceries-menu relative inline-block group">
              <Link to={`/Wellness`}>
                <span className="cursor-pointer text-sm hover:text-white/80">Wellness</span>
              </Link>
              {/* Dropdown menu, visible on hover */}
              <div className="groceries-dropdown text-sm hidden absolute mt-2 bg-white shadow-lg  p-2.5 z-50 group-hover:block w-72 border border-gray-300">
                <ul className="space-y-2 text-left font-semibold">
                  <li className="text-gray-700 hover:text-green-600card ">Biscuits, Drinks & Packaged Foods</li>
                  <li className="text-gray-700 hover:text-green-600">Fruits & Vegetables</li>
                  <li className="text-gray-700 hover:text-green-600">Cooking Essentials</li>
                  <li className="text-gray-700 hover:text-green-600">Dairy & Bakery</li>
                  <li className="text-gray-700 hover:text-green-600">Personal Care</li>
                  <li className="text-gray-700 hover:text-green-600">Beauty</li>
                  <li className="text-gray-700 hover:text-green-600">Mom & Baby Care</li>
                  <li className="text-gray-700 hover:text-green-600">Home Care</li>
                  <li className="text-gray-700 hover:text-green-600">Kitchenware</li>
                  <li className="text-gray-700 hover:text-green-600">Tableware</li>
                </ul>
              </div>
            </div>

            <div className="groceries-menu relative inline-block group">
              <Link to={`/All`}>
                <span className="cursor-pointer text-sm hover:text-white/80">All Categories</span>
              </Link>

              {/* Dropdown menu, visible on hover */}
              <div className="groceries-dropdown text-sm hidden absolute mt-2 bg-white shadow-lg  p-2.5 z-50 group-hover:block w-72 border border-gray-300">
                <ul className="space-y-2 text-left font-semibold">
                  <li className="text-gray-700 hover:text-green-600card ">Biscuits, Drinks & Packaged Foods</li>
                  <li className="text-gray-700 hover:text-green-600">Fruits & Vegetables</li>
                  <li className="text-gray-700 hover:text-green-600">Cooking Essentials</li>
                  <li className="text-gray-700 hover:text-green-600">Dairy & Bakery</li>
                  <li className="text-gray-700 hover:text-green-600">Personal Care</li>
                  <li className="text-gray-700 hover:text-green-600">Beauty</li>
                  <li className="text-gray-700 hover:text-green-600">Mom & Baby Care</li>
                  <li className="text-gray-700 hover:text-green-600">Home Care</li>
                  <li className="text-gray-700 hover:text-green-600">Kitchenware</li>
                  <li className="text-gray-700 hover:text-green-600">Tableware</li>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};
