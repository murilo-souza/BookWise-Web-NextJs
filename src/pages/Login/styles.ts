import styled from 'styled-components'

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1.1fr 1fr;

  padding: ${(props) => props.theme.size.xl};

  min-height: 94vh;

  gap: 12rem;
`

export const LogoContainer = styled.section`
  width: 100%;
  height: 100%;

  background: url('/images/Image.png') no-repeat center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`

export const LoginMethodsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`

export const WelcomeText = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 2.5rem;
`

export const Title = styled.h1`
  font-size: ${(props) => props.theme.size.xxl};

  color: ${(props) => props.theme.colors.gray100};

  line-height: 1.4;
`

export const Subtitle = styled.span`
  font-size: ${(props) => props.theme.size.md};
  font-weight: 400;

  color: ${(props) => props.theme.colors.gray200};

  line-height: 1.6;
`
