import styled from 'styled-components'

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1.1fr 1fr;

  padding: ${(props) => props.theme.size.xl};

  min-height: 94vh;
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

export const LoginMethodsContainer = styled.div``
