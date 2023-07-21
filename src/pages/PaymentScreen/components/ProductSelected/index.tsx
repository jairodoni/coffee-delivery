import { Minus, Plus, Trash } from 'phosphor-react'
import { ControlAmountProduct, ProductSelectedContainer } from './styles'

export function ProductSelected() {
  return (
    <ProductSelectedContainer>
      <img src="https://i.ibb.co/KFZDknC/coffee-01.png" alt="" />
      <div>
        <div>
          <span>Expresso Tradicional</span>
          <div>
            <ControlAmountProduct>
              <button>
                <Minus />
              </button>
              <span>2</span>
              <button>
                <Plus />
              </button>
            </ControlAmountProduct>
            <button>
              <Trash size={16} />
              REMOVER
            </button>
          </div>
        </div>
        <span>9,90</span>
      </div>
    </ProductSelectedContainer>
  )
}
