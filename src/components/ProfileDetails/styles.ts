import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid ${(props) => props.theme.colors.gray700};
  height: max-content;
`
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    content: '';
    display: block;
    width: 32px;
    height: 4px;
    background: linear-gradient(180deg, #7fd1cc 0%, #9694f5 100%);
    border-radius: 99999px;
    margin-top: 40px;
  }
`

export const UserName = styled.h3`
  font-size: 1.25rem;

  color: ${(props) => props.theme.colors.gray100};

  margin-top: 20px;

  margin-bottom: 10px;
`

export const MemberText = styled.span`
  font-size: 0.85rem;

  color: ${(props) => props.theme.colors.gray400};

  font-weight: 400;
`

export const ProfileDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 50px;
`
