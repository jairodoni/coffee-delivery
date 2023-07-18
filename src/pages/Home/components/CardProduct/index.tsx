import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  CardContainer,
  ControlAmountProduct,
  InfoProduct,
  SelectProduct,
} from './styles'
import { Coffee } from '../../../../@types/globalTypes'

interface CardProductProps {
  product: Coffee
}

export function CardProduct({ product }: CardProductProps) {
  return (
    <CardContainer>
      <div>
        <img src={product.coffee_image} alt="" />
      </div>
      <div>
        <InfoProduct>
          <label>
            {product.type.map((typeName: string) => (
              <span key={typeName}>{typeName.toString().toUpperCase()}</span>
            ))}
          </label>
          <h4>{product.name}</h4>
          <p>{product.description}</p>
        </InfoProduct>
        <SelectProduct>
          <small>
            R${' '}
            <span>
              {new Intl.NumberFormat('pt-BR', {
                minimumFractionDigits: 2,
              }).format(product.value)}
            </span>
          </small>
          <ControlAmountProduct>
            <div>
              <button>
                <Minus />
              </button>
              <span>1</span>
              <button>
                <Plus />
              </button>
            </div>
            <button>
              <ShoppingCart size={18} weight="fill" />
            </button>
          </ControlAmountProduct>
        </SelectProduct>
      </div>
    </CardContainer>
  )
}
