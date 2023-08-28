import { createContext, useReducer } from 'react'

import { cartReducer, cartInitialState } from '../reducers/cart'

export const CartContext = createContext()

function useCartReducer () {
  // El dispatch le envia las acciones al reduce
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeToCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({ type: 'CLEAN_CART' })

  return { state, addToCart, removeToCart, clearCart }
}

export function CartProvider ({ children }) {
  const { state, addToCart, removeToCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeToCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
