import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: column;

  overflow-y: auto;
  padding-bottom: 40;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const TitleSection = styled.span`
  font-size: 0.875rem;
  font-weight: 400;

  color: ${(props) => props.theme.colors.gray100};
`
export const RatingSections = styled.section`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  margin-top: 1rem;
`
export const LatestContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`
