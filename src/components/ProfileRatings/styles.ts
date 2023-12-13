import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-bottom: 40px;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const RatingsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Alert = styled.h3`
  font-size: 1rem;

  line-height: 1.4;

  color: ${(props) => props.theme.colors.gray400};

  text-align: center;
`
