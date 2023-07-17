import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../service/api'

interface Coffee {
  id: string
  name: string
  type: string
  coffee_image: string
  description: string
  value: number
}

interface ProductsContextData {
  coffeeList: Coffee[]
}

interface ProductsProviderProps {
  children: ReactNode
}

export const ProductsContext = createContext({} as ProductsContextData)

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [coffeeList, setCoffeeList] = useState<Coffee[]>([])

  async function getProductList() {
    const response = await api.get('/products')
    setCoffeeList(response.data)
  }

  useEffect(() => {
    getProductList()
  }, [])

  return (
    <ProductsContext.Provider value={{ coffeeList }}>
      {children}
    </ProductsContext.Provider>
  )
}
