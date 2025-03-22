import { createContext, useContext, useReducer } from "react"
import { CartReducer } from "../reducer";
const cartInitialState= {
    cartList: [],
    total: 0
}
const CartContext = createContext(cartInitialState);
export const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer(CartReducer, cartInitialState);
    const  addToCart=(product) => {
        const updatedCartList = state.cartList.concat(product);
        updatedTotal(updatedCartList)
        dispatch({
          type: "ADD_TO_CART",
          payload: {
            products: updatedCartList
          }
        })
    }
    const removeFromCart = (product) => {
      const updatedCartList = state.cartList.filter(current => current.id !== product.id);
      updatedTotal(updatedCartList);
      dispatch({
        type: "REMOVE_FROM_CART",
        payload:  {
          products: updatedCartList
        }
      })
    }
    const updatedTotal = (products) => {
      let total = 0;
      products.forEach(product => total = total+product.price);

      dispatch({
        type: "UPDATE_TOTAL",
        payload: {
          total: total
        }
      })
    }
    const value ={
      total:state.total,
      cartList:state.cartList,
      addToCart,
      removeFromCart
    };
  return (
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
  )
}
export const useCart = () => {
  const context = useContext(CartContext);
  return context;
}

