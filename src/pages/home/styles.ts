import styled from 'styled-components'

export const Container = styled.main``

export const PageTitle = styled.h1`
  display: flex;
  align-items: center;

  font-size: 1.5rem;

  line-height: 1.4;

  gap: 0.75rem;

  color: ${(props) => props.theme.colors.gray100};

  margin-bottom: 2.5rem;

  svg {
    color: ${(props) => props.theme.colors.green100};
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.25rem;

  button {
    background: none;

    border: 0;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme.colors.purple100};

    font-size: 0.875rem;
    font-weight: 400;

    line-height: 1.6;
  }
`

export const HeaderTitle = styled.span`
  font-size: 0.875rem;
  font-weight: 400;

  line-height: 1.6;

  color: ${(props) => props.theme.colors.gray100};
`

export const Wrapper = styled.section`
  margin-bottom: 2.5rem;
`
