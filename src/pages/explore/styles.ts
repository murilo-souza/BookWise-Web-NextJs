import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  > header {
    display: flex;
    justify-content: space-between;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  margin-left: 40px;
  margin-bottom: 48px;
`

export const BooksGrid = styled.div`
  display: grid;

  height: 100%;

  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 188px;

  gap: 1.25rem;

  overflow-y: auto;

  padding-bottom: 40px;

  &::-webkit-scrollbar {
    display: none;
  }
`
