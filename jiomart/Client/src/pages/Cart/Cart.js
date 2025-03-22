import { CartCard } from "./components/CartCard";
import { useCart } from "../../context/CartContext";
export const Cart = () => {

    const { total, cartList } = useCart();
    return (
        <main>
            <div className="p-6 mx-auto min-h-screen pl-[200px]">
                <h1 className="text-2xl text-left font-bold mb-4">My Cart</h1>
                <div className="bg-white border-[1px] text-left p-4 rounded-[30px] mb-4 w-[750px] mr-[25px] border border-gray-500">


                    <div className="flex justify-between">
                    <div className="font-bold">
                    Scheduled Basket({cartList.length})
                    </div>
                    <div className="font-bold">
                   {total}
                    </div>
                    </div>
                   
                {cartList.map((product) => (
                    <CartCard key={product.id} product={product} />
                ))}
                </div>
            </div>
        </main>
    )
}
