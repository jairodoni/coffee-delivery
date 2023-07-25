import { useEffect, useState } from 'react'
import { ButtonTypePayment, FormContainer, HeaderForm } from './styles'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'
import axios from 'axios'

export function FormPayment() {
  const [typePaymentSelected, setTypePaymentSelected] = useState<string>('')

  function searchCepInfoLocation(text: string) {
    const cepSplitFormated = text.split('-')
    const cepFormated = cepSplitFormated.join('').toString()

    // if (dadosPerfil.cepInvalido === false) {
    const response = axios.get(`https://viacep.com.br/ws/${cepFormated}/json`)
    // .then((res) => res.json())
    // .then((data) => {
    //   this.setState({
    //     dadosPerfil: {
    //       ...dadosPerfil,
    //       cep: data.cep,
    //       endereco: data.logradouro,
    //       bairro: data.bairro,
    //     },
    //     cepInvalido: false,
    //   })
    // })
    console.log('RESPONSE: ', response)
    // }
  }
  // useEffect(() => {
  //   searchCepInfoLocation(13860-100)
  // }, [])

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
          <ButtonTypePayment
            type="button"
            typePaymentSelected={`${typePaymentSelected}`}
            typePayment="creditCard"
            onClick={() => setTypePaymentSelected('creditCard')}
          >
            <CreditCard />
            CARTÃO DE CREDITO
          </ButtonTypePayment>
          <ButtonTypePayment
            type="button"
            typePaymentSelected={typePaymentSelected}
            typePayment="debitCard"
            onClick={() => setTypePaymentSelected('debitCard')}
          >
            <Bank />
            CARTÃO DE DEBITO
          </ButtonTypePayment>
          <ButtonTypePayment
            type="button"
            typePaymentSelected={typePaymentSelected}
            typePayment="money"
            onClick={() => setTypePaymentSelected('money')}
          >
            <Money />
            DINHEIRO
          </ButtonTypePayment>
        </div>
      </div>
    </FormContainer>
  )
}
