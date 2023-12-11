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
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

type AuthButtonsProps = {
  callbackUrl?: string
}

export function Login({ callbackUrl = '/home' }: AuthButtonsProps) {
  const router = useRouter()

  const handleSignin = (provider?: string) => {
    if (!provider) {
      router.push(callbackUrl)
      return
    }
    signIn(provider, {
      callbackUrl,
    })
  }

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
        <SigninButton
          img={GoogleLogo}
          title="Entrar com Google"
          onClick={() => handleSignin('google')}
        />
        <SigninButton
          img={GitHubLogo}
          title="Entrar com GitHub"
          onClick={() => handleSignin('github')}
        />
        <SigninButton
          img={VisitorLogo}
          title="Acessar como visitante"
          onClick={() => handleSignin()}
        />
      </LoginMethodsContainer>
    </Container>
  )
}
