import CartImg from "../../../assets/cartImg/empty-cart.svg";
import { Link } from "react-router-dom";

export const CartEmpty = () => {
  return (
    <div className="mb-[1000px]">
      <h1 className="text-2xl text-left font-bold mb-4 text-[#141414] pl-[200px] pt-4">My Cart</h1>
      <div className=" flex flex-col items-center justify-center p-1 text-left">
    
      <img src={CartImg} className=" w-30 h-30" alt="JioMart" />
       
      <p className="text-[#141414] font-sans font-bold">Your Cart is Empty!</p>
      
        <p className="text-gray-900  text-sm md:text-base font-sans">
          It's a nice day to buy the items you saved for later
        </p>

        <div className="flex">
        <p> or</p>
        <Link to="/" className="pl-2 text-sm md:text-base text-[#0078ad] font-sans">
          Continue Shopping
        </Link>
        </div>

        
      </div>
    </div>
  )
}
