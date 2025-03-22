import { Link } from "react-router-dom";
import Logo from "../../assets/Jiomartlogo.png";
import Footer1 from "../../assets/footer/Footer1.svg";
import Footer2 from "../../assets/footer/Footer2.svg";


export const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 ">
      <div className="container bg-text-gray-800 mx-auto md:px-12 mx-[150px]  mx-auto pl-40 pr-30 py-2" style={{paddingLeft: "160px",paddingRight:"120px"}}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8" >
          {/* All Categories */}
          <Link className="text-left" >
            <h4 className="font-semibold text-lg mb-4" >All Categories</h4>
            <ul className="space-y-2 text-base font-medium">
              <li className="hover:bg-gray-200 p-2">Grocery</li>
              <li className="hover:bg-gray-200 p-2">Electronics</li>
              <li className="hover:bg-gray-200 p-2">Fashion</li>
              <li className="hover:bg-gray-200 p-2">Home & Lifestyle</li>
              <li className="hover:bg-gray-200 p-2">Premium Fruits</li>
              <li className="hover:bg-gray-200 p-2">Books</li>
              <li className="hover:bg-gray-200 p-2">Furniture</li>
            </ul>
          </Link>
          {/* Popular Categories */}
          <Link>
            <h4 className="text-left font-semibold text-lg mb-4">Popular Categories</h4>
            <ul className="space-y-2 text-left">
              <li className="hover:bg-gray-200 p-2">Biscuits, Drinks & Packaged Foods</li>
              <li className="hover:bg-gray-200 p-2">Fruits & Vegetables</li>
              <li className="hover:bg-gray-200 p-2">Cooking Essentials</li>
              <li className="hover:bg-gray-200 p-2">Dairy & Bakery</li>
              <li className="hover:bg-gray-200 p-2">Personal Care</li>
              <li className="hover:bg-gray-200 p-2">Beauty</li>
              <li className="hover:bg-gray-200 p-2">Home Care</li>
              <li className="hover:bg-gray-200 p-2">Mom & Baby Care</li>
              <li className="hover:bg-gray-200 p-2">School, Office & Stationery</li>
            </ul>
          </Link>

          {/* Customer Account */}
          <Link  className="text-left">
            <h4 className="font-semibold text-lg mb-4">Customer Account</h4>
            <ul className="space-y-2">
              <li className="hover:bg-gray-200 p-2">My Account</li>
              <li className="hover:bg-gray-200 p-2">My Orders</li>
              <li className="hover:bg-gray-200 p-2">Wishlist</li>
              <li className="hover:bg-gray-200 p-2">Delivery Addresses</li>
              <li className="hover:bg-gray-200 p-2">JioMart Wallet</li>
            </ul>
          </Link>

          {/* Help & Support */}
          <Link  className="text-left">
            <h4 className="font-semibold text-lg mb-4">Help & Support</h4>
            <ul className="space-y-2">
              <li className="hover:bg-gray-200 p-2">About Us</li>
              <li className="hover:bg-gray-200 p-2">FAQ</li>
              <li className="hover:bg-gray-200 p-2">Terms & Conditions</li>
              <li className="hover:bg-gray-200 p-2">Privacy Policy</li>
              <li className="hover:bg-gray-200 p-2">E-waste Policy</li>
              <li className="hover:bg-gray-200 p-2">Cancellation & Return Policy</li>
              <li className="hover:bg-gray-200 p-2">Shipping & Delivery Policy</li>
              <li className="hover:bg-gray-200 p-2">AC Installation by resQ</li>
            </ul>
          </Link>

          {/* Contact & App Links */}
          <Link className="text-left">
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <p className="hover:bg-gray-200 p-2">WhatsApp: +91 79905 70053</p>
            <p className="hover:bg-gray-200 p-2">Call Us: 1800 890 1222</p>
            <p className="hover:bg-gray-200 p-2 text-sm text-gray-600">8:00 AM to 8:00 PM, 365 days</p>

            <h4 className="font-semibold text-lg mt-6">Download the App</h4>
            <div className="flex space-x-3 mt-2">
              <img src={Footer1} alt="Google Play" className="w-32" />
              <img src={Footer2} alt="App Store" className="w-32" />
            </div>
          </Link>
        </div>

        {/* Copyright Section */}
        <div className="flex text-center text-gray-600 text-sm mt-10 border-t pt-4">

          <Link to="/" className="flex items-center gap-3">
            <img src={Logo} className="w-9 h-auto" alt="JioMart" />
            <span className="text-center text-gray-600 text-sm"> © 2025 All rights reserved. Reliance Retail Ltd.</span>
          </Link>

          <span className="ml-[200px]">
            Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+, Google Chrome 80+
          </span>

        </div>
      </div>

    </footer>
  );
};

