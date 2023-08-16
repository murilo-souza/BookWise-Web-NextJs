import styled from 'styled-components'

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.gray700};

  position: fixed;
  top: ${(props) => props.theme.size.xl};
  left: ${(props) => props.theme.size.xl};
  bottom: ${(props) => props.theme.size.xl};

  border-radius: 12px;

  display: flex;
  flex-direction: column;

  padding: 2.5rem 3.25rem;
`

export const LogoContainer = styled.div`
  margin-bottom: 4rem;

  img {
    width: 8rem;
    height: 2rem;
  }
`

export const SignInButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.75rem;

  color: ${(props) => props.theme.colors.gray200};

  background: none;

  border: 0;

  margin-top: auto;

  font-size: 1rem;

  cursor: pointer;

  padding: 0.25rem 0.5rem;

  &:hover {
    background: rgba(230, 232, 242, 0.04);

    border-radius: 4px;
  }

  svg {
    color: ${(props) => props.theme.colors.green100};
  }
`
