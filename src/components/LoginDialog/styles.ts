import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: #00000099;
`

export const DialogContent = styled(Dialog.Content)`
  position: fixed;
  width: 416px;
  background: ${(props) => props.theme.colors.gray700};
  box-shadow: 4px 16px 24px 0px #00000040;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 56px 72px;
  border-radius: 12px;

  > div {
    max-width: 372px;
    margin: 0 auto;
    text-align: center;
  }
`

export const DialogClose = styled(Dialog.Close)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${(props) => props.theme.colors.gray400};
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
`

export const Heading = styled.h3`
  font-size: 1rem;

  line-height: 1.4;

  color: ${(props) => props.theme.colors.gray200};

  margin-bottom: 40px;
`
