import { ButtonTypePayment, FormContainer, HeaderForm } from './styles'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'

export function FormPayment() {
  return (
    <FormContainer>
      <h1>Complete seu pedido</h1>
      <div>
        <HeaderForm color="yellow">
          <MapPinLine />
          <p>
            <span>Endereço de Entrega</span>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </p>
        </HeaderForm>
        <input type="text" placeholder="CEP" />
        <input type="text" placeholder="Rua" />
        <div>
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Complemento" />
        </div>
        <div>
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
        </div>
      </div>
      <div>
        <HeaderForm color="purple">
          <CurrencyDollar />
          <p>
            <span>Pagamento</span>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </p>
        </HeaderForm>
        <div>
          <ButtonTypePayment>
            <CreditCard />
            CARTÃO DE CREDITO
          </ButtonTypePayment>
          <ButtonTypePayment>
            <Bank />
            CARTÃO DE DEBITO
          </ButtonTypePayment>
          <ButtonTypePayment>
            <Money />
            DINHEIRO
          </ButtonTypePayment>
        </div>
      </div>
    </FormContainer>
  )
}
