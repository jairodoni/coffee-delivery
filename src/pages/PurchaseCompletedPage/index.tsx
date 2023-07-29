import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import illustration from '../../assets/imgs/illustration.png'
import { PurchaseCompletedComponent } from './styles'

export function PurchaseCompletedPage() {
  return (
    <PurchaseCompletedComponent>
      <div>
        <h3>Uhu! Pedido confirmado</h3>
        <span>Agora é só aguardar que logo o café chegará até você</span>
        <div>
          <div>
            <div>
              <MapPin weight="fill" />
            </div>
            <div>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </div>
          <div>
            <div>
              <Timer weight="fill" />
            </div>
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </div>
          <div>
            <div>
              <CurrencyDollar weight="fill" />
            </div>
            <div>
              <span>Pagamento na entrega</span>
              <strong>Cartão de Crédito</strong>
            </div>
          </div>
        </div>
      </div>
      <img src={illustration} alt="" />
    </PurchaseCompletedComponent>
  )
}
