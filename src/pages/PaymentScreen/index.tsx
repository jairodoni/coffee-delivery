import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { useProducts } from '../../hooks/useProducts'

import { FormPayment } from './components/FormPayment'
import { ProductSelected } from './components/ProductSelected'

import { PaymentContainer, TotalComponent } from './styles'
import { formatPriceWithType } from '../../util/format'

const shippingAddressFormValidationSchema = zod.object({
  cep: zod
    .string({
      required_error: 'O CEP é obrigatório',
      invalid_type_error: 'O CEP é obrigatório',
    })
    .min(1, 'Informe o cep')
    .max(10, 'Cep Invalido'),
  street: zod
    .string({
      required_error: 'A rua é obrigatória',
      invalid_type_error: 'A rua é obrigatória',
    })
    .min(1, 'Informe o cep'),
  numberHouse: zod
    .number({
      required_error: 'O numero é obrigatória',
      invalid_type_error: 'O numero é obrigatória',
    })
    .min(1, 'Numero invalido')
    .max(5000, 'Numero invalido'),
  complement: zod
    .string({
      required_error: 'O conteudo deve ser em texto',
      invalid_type_error: 'O conteudo deve ser em texto',
    })
    .optional(),
  district: zod
    .string({
      required_error: 'O bairro é obrigatório',
      invalid_type_error: 'O bairro é obrigatório',
    })
    .min(1, 'Informe o bairro'),
  city: zod
    .string({
      required_error: 'O cidade é obrigatória',
      invalid_type_error: 'O cidade deve ser em texto',
    })
    .min(1, 'Informe a cidade'),
  uf: zod
    .string({
      required_error: 'O estado é obrigatório',
      invalid_type_error: 'O estado deve ser em texto',
    })
    .min(2, 'Informe o cep')
    .max(2, 'Cep Invalido'),
  payment: zod.string().min(5, 'Informe a forma de pagamento'),
})

export type ShippingAddressFormData = zod.infer<
  typeof shippingAddressFormValidationSchema
>

export function PaymentScreen() {
  const {
    coffeeList,
    shoppingCart,
    totalPayment,
    registerNewOrder,
    calcTotalPayment,
  } = useProducts()

  const shippingAddressForm = useForm<ShippingAddressFormData>({
    resolver: zodResolver(shippingAddressFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      numberHouse: 0,
      complement: '',
      district: '',
      city: '',
      uf: '',
    },
  })

  const { handleSubmit, reset } = shippingAddressForm

  const listProducts = shoppingCart.sort(
    (productA, productB) => productA.coffeeId - productB.coffeeId,
  )
  useEffect(() => {
    if (shoppingCart.length > 0 && coffeeList.length > 0) {
      calcTotalPayment()
    }
  }, [coffeeList, shoppingCart])

  function handleRegisterNewOrder(data: ShippingAddressFormData) {
    if (data) {
      registerNewOrder(data)
      reset()
    }
  }

  const frete = 3.5
  const totalWithFrete = totalPayment + frete

  const formatValue = (value: number) => formatPriceWithType(value)

  return (
    <PaymentContainer onSubmit={handleSubmit(handleRegisterNewOrder)} action="">
      <FormProvider {...shippingAddressForm}>
        <FormPayment />
      </FormProvider>
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
