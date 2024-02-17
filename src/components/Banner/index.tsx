import { Imagem, Logo, Text } from './styles'
import bannerImg from '../../assets/images/fundo.png'
import LogoImg from '../../assets/images/logo.svg'
const Banner = () => (
  <>
    <Imagem style={{ backgroundImage: `url(${bannerImg})` }} />
    <Logo src={LogoImg} />
    <Text>Viva experiências dastronômicas no conforto da sua casa</Text>
  </>
)

export default Banner
