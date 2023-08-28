// import { useCart } from '../hooks/useCart'
// import { useFilters } from '../hooks/useFilters'

import './Footer.css'

export function Footer () {
  // const { filters } = useFilters()
  // const { cart } = useCart()

  return (
    <footer className='footer'>
      {/* {
            JSON.stringify(filters, null, 2)
        }, */}
      {/* {
          JSON.stringify(cart, null, 2)
        } */}

      <h4>Prueba técnica de React ⚛ -<span>@Martin Lora</span></h4>
      <h5>Shopping Cart con useContext y useReducer</h5>
    </footer>
  )
}