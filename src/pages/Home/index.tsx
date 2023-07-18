import { HeadTitleComponent } from '../../components/HeadTitleComponent'
import { CardProduct } from './components/CardProduct'
import { PresentationComponent } from './components/PresentationComponent'
import { HomeContainer, ProductsContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HeadTitleComponent title="Home" />
      <PresentationComponent />
      <h2>Nossos cafés</h2>
      <ProductsContainer>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </ProductsContainer>
    </HomeContainer>
  )
}
