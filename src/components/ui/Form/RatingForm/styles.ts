import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme.colors.gray700};

  padding: 1.5rem;

  border-radius: 8px;
`

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > section {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`
export const ProfileName = styled.p`
  color: ${(props) => props.theme.colors.gray100};

  font-size: ${(props) => props.theme.size.md};
  font-weight: 400;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`
