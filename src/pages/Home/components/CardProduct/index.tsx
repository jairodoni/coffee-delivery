import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  CardContainer,
  ControlAmountProduct,
  InfoProduct,
  SelectProduct,
} from './styles'

export function CardProduct() {
  return (
    <CardContainer>
      <div>
        <img src="https://i.ibb.co/KFZDknC/coffe-01.png" alt="" />
      </div>
      <div>
        <InfoProduct>
          <span>TRADICIONAL</span>
          <h4>Expresso Tradicional</h4>
          <p>O tradicional café feito com água quente e grãos moídos</p>
        </InfoProduct>
        <SelectProduct>
          <small>
            R$ <span>9,90</span>
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
