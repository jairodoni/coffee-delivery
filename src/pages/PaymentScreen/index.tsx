import { ProductSelected } from './components/ProductSelected'
import { FormPayment } from './components/FormPayment'
import { PaymentContainer, TotalComponent } from './styles'

export function PaymentScreen() {
  return (
    <PaymentContainer>
      <FormPayment />
      <div>
        <h1>Cafés selecionados</h1>
        <div>
          <ProductSelected />
          <ProductSelected />
          <TotalComponent>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
            <button type="submit">COMFIRMAR PEDIDO</button>
          </TotalComponent>
        </div>
      </div>
    </PaymentContainer>
  )
}
