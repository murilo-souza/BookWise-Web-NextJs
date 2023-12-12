import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 1rem;
  margin-top: 40px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > section {
    display: flex;
    flex-direction: column;

    gap: 0.75rem;
  }
`
export const TitleSection = styled.span`
  font-size: 0.875rem;
  font-weight: 400;

  color: ${(props) => props.theme.colors.gray100};
`
