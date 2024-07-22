import { HeaderContainer, Image, TextCustom } from './styles'
import Logo from './../../assets/logo.svg'
export function Header() {
  return (
    <HeaderContainer>
      <Image
        src={Logo}
        alt="logotipo dois triangulos em rotacao de 15 graus a direita da cor verde"
      />
      <TextCustom>Ignite Feed</TextCustom>
    </HeaderContainer>
  )
}
