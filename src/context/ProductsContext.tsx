import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../service/api'
import { Coffee } from '../@types/globalTypes'
import { calcularPrecoPrazo, consultarCep } from 'correios-brasil/dist'

interface ShoppingCart {
  coffeeId: number
  qtde: number
  typeOperation?: 'add' | 'remove'
}
interface ShoppingCartFormated {
  id: number
  name: string
  coffee_image: string
  qtde: number
  value: number
}

interface ProductsContextData {
  coffeeList: Coffee[]
  shoppingCart: ShoppingCart[]
  totalPayment: number
  handleSetShoppingCart: (product: ShoppingCart) => void
  handleRemoveItemShoppingCart: (product: ShoppingCart) => void
  calcTotalPayment: () => void
  setTotalPayment: (totalPayment: number) => void
  setTotalPurchase: (value: number, qtde: number) => void
}

interface ProductsProviderProps {
  children: ReactNode
}

export const ProductsContext = createContext({} as ProductsContextData)

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [coffeeList, setCoffeeList] = useState<Coffee[]>([])
  const [totalPayment, setTotalPayment] = useState<number>(0)
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
          qtde:
            product.typeOperation === 'remove'
              ? checkItem.qtde - product.qtde
              : checkItem.qtde + product.qtde,
        },
      ])
    } else {
      setShoppingCart((state) => [...state, product])
    }
  }

  function handleRemoveItemShoppingCart(product: ShoppingCart) {
    const checkItem = shoppingCart.find(
      (productItem) => productItem.coffeeId === product.coffeeId,
    )
    if (checkItem !== undefined) {
      const productFiltredList: ShoppingCart[] = shoppingCart.filter(
        (productItem) => productItem.coffeeId !== product.coffeeId,
      )

      setShoppingCart(productFiltredList)
    }
  }
  function setTotalPurchase({ value, qtde }: any) {
    setTotalPayment((state: number) => {
      return state + value * qtde
    })
  }

  function calcTotalPayment() {
    let listProductsInCart: ShoppingCartFormated[] = []

    for (const i in coffeeList) {
      const product = coffeeList[i]
      for (const j in shoppingCart) {
        const productCartRegister = shoppingCart[j]
        if (Number(productCartRegister.coffeeId) === Number(product.id)) {
          listProductsInCart = [
            ...listProductsInCart,
            {
              id: Number(product.id),
              name: product.name,
              coffee_image: product.coffee_image,
              value: product.value,
              qtde: productCartRegister.qtde,
            },
          ]
        }
      }
    }

    const total = listProductsInCart.reduce((acumulador, valorAtual) => {
      const unitProduct = valorAtual.value * valorAtual.qtde
      return acumulador + unitProduct
    }, 0)

    setTotalPayment(total)
  }

  useEffect(() => {
    getProductList()
  }, [])

  return (
    <ProductsContext.Provider
      value={{
        coffeeList,
        shoppingCart,
        totalPayment,
        handleSetShoppingCart,
        handleRemoveItemShoppingCart,
        calcTotalPayment,
        setTotalPayment,
        setTotalPurchase,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
