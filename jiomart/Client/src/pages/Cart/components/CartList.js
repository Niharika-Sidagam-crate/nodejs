import groceries1 from "../../../assets/groceries/groceries1.webp";
import { FaChevronRight } from "react-icons/fa6";
export const CartList = () => {
  return (
    <div className="p-6  mx-auto min-h-screen pl-[200px]">
      <h1 className="text-2xl text-left font-bold mb-4">My Cart</h1>

      <div className="flex">

        <div className="bg-white border-[1px] text-left p-4 rounded-[30px] mb-4 pr-[900px] w-[750px] mr-[25px] border border-gray-500 border-[1px]">
          <div className="flex justify-between">
            {/* Quick Basket Section */}
            <h2 className="text-lg font-semibold  text-gray-700">Quick Basket (1)</h2>
            <p className="text-black font-bold">₹132.00</p>
          </div>

          <div className="flex p-2 pr-2">
            <p className="text-green-600 text-[10px] bg-green-100 mr-2">Quick</p>
            <p className="text-[10px]"> Delivery in 10 to 30 mins</p>
          </div>

          <p className="text-green-600 text-sm bg-green-100 p-2">Yay! You get FREE delivery with this Basket</p>

          <div className="flex items-center mt-2">
            <img
              src={groceries1}
              alt="product"
              className="w-12 h-12 mr-4"
            />
            <div>
              <p className="text-sm">Super Sarvottam Rice Bran Oil 1L</p>
              <p className="text-gray-600 line-through text-xs">₹199.00</p>
              <p className="text-black font-bold">₹132.00</p>
            </div>

          </div>

          <p className="text-[#0c5273] font-bold mt-4">save for later</p>
        </div>

        {/* Progress Bar */}

        <div>
          <div className="flex items-center justify-between mb-4 h-[100px] bg-green-100 rounded-[30px] border border-gray-500 border-[1px]">
            <div className="flex items-center space-x-2" >
              <div className="w-6 h-6 flex items-center justify-center bg-green-500 text-white rounded-full font-semibold">1</div>
              <span className="text-gray-700 font-semibold">Your Cart</span>
            </div>

            <div className="w-1/3 h-1 bg-gray-300"></div>

            <div className="flex items-center space-x-2 opacity-50">
              <div className="w-6 h-6 flex items-center justify-center bg-gray-300 text-gray-600 rounded-full font-semibold">2</div>
              <span className="text-gray-600">Order Review</span>
            </div>

            <div className="w-1/3 h-1 bg-gray-300"></div>

            <div className="flex items-center space-x-2 opacity-50">
              <div className="w-6 h-6 flex items-center justify-center bg-gray-300 text-gray-600 rounded-full font-semibold">3</div>
              <span className="text-gray-600">Payment</span>
            </div>
          </div>
          {/* Apply Coupon */}
          <div className="flex items-center justify-between p-3 border rounded-lg mb-4 cursor-pointer border border-gray-500 border-[1px]">
            <div className="flex items-center space-x-2">
              <span className="bg-green-100 text-green-600 px-2 py-1 text-sm rounded">%</span>
              <span className="text-gray-700 font-semibold">Apply Coupon</span>
            </div>
            <FaChevronRight className="w-5 h-5" />

          </div>

          {/* Payment Details */}
          <div className="bg-white p-4 rounded-md border border-gray-500 border-[1px]">
            <h2 className="text-lg font-semibold mb-2">Payment Details</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>MRP Total</span>
                <span className="font-semibold">₹384.00</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Product Discount</span>
                <span>-₹107.00</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee (Quick)</span>
                <span className="text-green-600">FREE</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>₹277.00</span>
              </div>
              <p className="text-green-600 text-sm">You Saved ₹107.00</p>
            </div>
          </div>

          {/* Place Order Button */}
          <button className="w-full bg-blue-600 text-white py-3 mt-4 rounded-lg hover:bg-blue-700 transition font-semibold">
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}
