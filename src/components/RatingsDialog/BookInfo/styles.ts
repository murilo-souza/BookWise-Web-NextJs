import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    width: 24px;
    height: 24px;
    color: ${(props) => props.theme.colors.green100};
  }
`
export const Title = styled.h3`
  font-size: 1rem;

  line-height: 1.4;

  color: ${(props) => props.theme.colors.gray300};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
export const Info = styled.span`
  font-size: 0.875rem;
  font-weight: 400;

  line-height: 1.4;

  color: ${(props) => props.theme.colors.gray200};

  margin-top: 0.5rem;
`
