import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  > section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 3rem;
  }
`
export const TitleSection = styled.span`
  font-size: 0.875rem;
  font-weight: 400;

  color: ${(props) => props.theme.colors.gray100};
`
