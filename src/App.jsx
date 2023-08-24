import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { useState } from 'react'

function App () {
  const [products] = useState(initialProducts)
  const [filters, setFilter] = useState({
    category: 'all',
    nimPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.nimPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <Products products={filteredProducts} />
  )
}

export default App
