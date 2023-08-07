import {
  Container,
  LoginMethodsContainer,
  LogoContainer,
  Subtitle,
  Title,
  WelcomeText,
} from './styles'
import Image from 'next/image'
import Logo from '../../assets/logo.svg'
import { SigninButton } from '@/components/SigninButton'
import GoogleLogo from '../../assets/google.svg'
import GitHubLogo from '../../assets/github.svg'
import VisitorLogo from '../../assets/rocket.svg'

export function Login() {
  return (
    <Container>
      <LogoContainer>
        <Image src={Logo} alt="Logo" />
      </LogoContainer>
      <LoginMethodsContainer>
        <WelcomeText>
          <Title>Boas vindas!</Title>
          <Subtitle>Faça seu login ou acesse como visitante.</Subtitle>
        </WelcomeText>
        <SigninButton img={GoogleLogo} title="Entrar com Google" />
        <SigninButton img={GitHubLogo} title="Entrar com GitHub" />
        <SigninButton img={VisitorLogo} title="Acessar como visitante" />
      </LoginMethodsContainer>
    </Container>
  )
}
