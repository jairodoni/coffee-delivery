import { ThemeProvider } from 'styled-components'
import { ProductsProvider } from './context/ProductsContext'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ProductsProvider>
        <h1>BATATA</h1>
      </ProductsProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
