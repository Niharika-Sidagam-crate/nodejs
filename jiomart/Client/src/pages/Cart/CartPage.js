import { CartEmpty } from "./components/CartEmpty";
import { Cart } from "./Cart";
import { useCart } from "../../context/CartContext";



export const CartPage = () => {
   const { cartList } = useCart();
  return (
    <main>
  
        {cartList.length ? <Cart /> :  < CartEmpty /> }
 
    </main>
  )
}
