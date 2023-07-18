import { HeadTitleComponent } from '../../components/HeadTitleComponent'
import { useProducts } from '../../hooks/useProducts'
import { CardProduct } from './components/CardProduct'
import { PresentationComponent } from './components/PresentationComponent'
import { HomeContainer, ProductsContainer } from './styles'

export function Home() {
  const { coffeeList } = useProducts()
  return (
    <HomeContainer>
      <HeadTitleComponent title="Home" />
      <PresentationComponent />
      <h2>Nossos cafés</h2>
      <ProductsContainer>
        {coffeeList.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </HomeContainer>
  )
}
