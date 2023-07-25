import { ProductSelected } from './components/ProductSelected'
import { FormPayment } from './components/FormPayment'
import { PaymentContainer, TotalComponent } from './styles'
import { useEffect } from 'react'
import { useProducts } from '../../hooks/useProducts'

export function PaymentScreen() {
  const { coffeeList, shoppingCart, totalPayment, calcTotalPayment } =
    useProducts()

  const listProducts = shoppingCart.sort(
    (productA, productB) => productA.coffeeId - productB.coffeeId,
  )
  useEffect(() => {
    if (shoppingCart.length > 0 && coffeeList.length > 0) {
      calcTotalPayment()
    }
  }, [coffeeList, shoppingCart])

  const frete = 3.5
  const totalWithFrete = totalPayment + frete

  const formatValue = (value: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)

  return (
    <PaymentContainer>
      <FormPayment />
      <div>
        <h1>Cafés selecionados</h1>
        <div>
          {!!listProducts &&
            listProducts.length > 0 &&
            listProducts.map((product) => (
              <ProductSelected
                key={product.coffeeId}
                shoppingCartData={product}
              />
            ))}
          <TotalComponent>
            <div>
              <span>Total de itens</span>
              <span>{formatValue(totalPayment)}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>{formatValue(frete)}</span>
            </div>
            <div>
              <span>Total</span>
              <span>{formatValue(totalWithFrete)}</span>
            </div>
            <button type="submit">COMFIRMAR PEDIDO</button>
          </TotalComponent>
        </div>
      </div>
    </PaymentContainer>
  )
}
