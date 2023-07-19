import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../service/api'
import { Coffee } from '../@types/globalTypes'

interface ShoppingCart {
  coffeeId: number
  qtde: number
}

interface ProductsContextData {
  coffeeList: Coffee[]
  shoppingCart: ShoppingCart[]
  handleSetShoppingCart: (product: ShoppingCart) => void
}

interface ProductsProviderProps {
  children: ReactNode
}

export const ProductsContext = createContext({} as ProductsContextData)

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [coffeeList, setCoffeeList] = useState<Coffee[]>([])
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart[]>(() => {
    const storagedCart = localStorage.getItem(
      '@coffee-delivery:shopping-cart-coffee-1.0.0',
    )

    if (storagedCart) {
      return JSON.parse(storagedCart)
    }

    return []
  })
  useEffect(() => {
    const stateJSON = JSON.stringify(shoppingCart)
    console.log('shoppingCart: ', shoppingCart)
    localStorage.setItem(
      '@coffee-delivery:shopping-cart-coffee-1.0.0',
      stateJSON,
    )
  }, [shoppingCart])

  async function getProductList() {
    const response = await api.get('/products')
    setCoffeeList(response.data)
  }

  function handleSetShoppingCart(product: ShoppingCart) {
    const checkItem = shoppingCart.find(
      (productItem) => productItem.coffeeId === product.coffeeId,
    )

    if (checkItem !== undefined) {
      const productFiltredList: ShoppingCart[] = shoppingCart.filter(
        (productItem) => productItem.coffeeId !== product.coffeeId,
      )
      setShoppingCart([
        ...productFiltredList,
        {
          coffeeId: product.coffeeId,
          qtde: checkItem.qtde + product.qtde,
        },
      ])
    } else {
      setShoppingCart((state) => [...state, product])
    }
  }

  useEffect(() => {
    getProductList()
  }, [])

  return (
    <ProductsContext.Provider
      value={{ coffeeList, shoppingCart, handleSetShoppingCart }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
