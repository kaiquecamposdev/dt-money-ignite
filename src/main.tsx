import { Home } from '@/pages/Home'
import { GlobalStyles } from '@/styles/global.ts'
import { defaultTheme } from '@/styles/themes/default.ts'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    <Home />
  </ThemeProvider>,
)
