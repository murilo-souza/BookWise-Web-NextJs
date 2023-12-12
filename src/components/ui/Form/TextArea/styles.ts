import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.colors.gray800};
  border: 1px solid currentColor;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.gray500};
  transition: 0.2s;

  &:focus-within {
    color: ${(props) => props.theme.colors.green200};
  }

  textarea {
    flex: 1;
    padding: 0.875rem 1.25rem;
    background: none;
    border: none;
    color: ${(props) => props.theme.colors.gray100};
    font-size: 0.875rem;
    resize: none;
    min-height: 136px;

    &::placeholder {
      color: ${(props) => props.theme.colors.gray400};
    }

    &:focus {
      outline: none;
    }
  }

  span {
    color: '#7C7C8A';
    font-size: 1rem;
    margin-left: auto;
    padding-right: 8px;
    padding-bottom: 4px;
  }
`
