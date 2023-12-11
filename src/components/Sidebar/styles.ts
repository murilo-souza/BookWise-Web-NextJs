import styled from 'styled-components'

export const Container = styled.aside`
  width: 234px;
  height: calc(100% - 40px);

  background-color: ${(props) => props.theme.colors.gray700};

  border-radius: 12px;

  display: flex;
  flex-direction: column;

  margin: 20px;

  align-items: center;
  justify-content: space-between;

  padding-top: 40px;
  padding-bottom: 24px;
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
