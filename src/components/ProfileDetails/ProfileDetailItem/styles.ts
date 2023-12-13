import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 1.25rem;

  svg {
    width: 32px;
    height: 32px;
    color: ${(props) => props.theme.colors.green100};
  }
`

export const InfoText = styled.h3`
  font-size: 1rem;

  color: ${(props) => props.theme.colors.gray200};
`

export const InfoSubtext = styled.span`
  font-size: 0.75rem;

  color: ${(props) => props.theme.colors.gray400};

  font-weight: 400;
`
