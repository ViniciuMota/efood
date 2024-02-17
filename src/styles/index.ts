import { createGlobalStyle } from 'styled-components'
import { cores } from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: ${cores.corDaFonte};
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
  }
`

export default EstiloGlobal
