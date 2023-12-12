import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import styled from 'styled-components'

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;

  background: #00000099;
`

export const DialogContent = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  right: 0;

  width: 660px;
  height: 100%;

  background: ${(props) => props.theme.colors.gray800};

  box-shadow: -4px 0px 30px 0px #00000080;

  padding: 1.5rem 48px 1.5rem 48px;

  display: flex;
  flex-direction: column;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.gray700};
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.gray700};
  }
`

export const DialogClose = styled(Dialog.Close)`
  color: ${(props) => props.theme.colors.gray400};
  background: none;
  border: none;
  margin-left: auto;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`

export const BookDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.gray700};
  padding: 1.5rem 2rem;
  border-radius: 10px;
`

export const BookDetailsContainer = styled.section`
  display: flex;
  gap: 2rem;
`

export const BookImage = styled(Image)`
  border-radius: 10px;
  object-fit: cover;
  min-width: 171px;
`

export const BookContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const BookInfos = styled.div`
  margin-top: 40px;

  padding-top: 24px;

  border-top: 1px solid ${(props) => props.theme.colors.gray600};

  display: flex;

  gap: 60px;
`

export const BookName = styled.h3`
  font-size: 1rem;

  line-height: 1.4;

  color: ${(props) => props.theme.colors.gray100};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
export const Author = styled.span`
  font-size: 0.875rem;
  font-weight: 400;

  line-height: 1.4;

  color: ${(props) => props.theme.colors.gray400};

  margin-top: 0.5rem;
`
export const AvaliationText = styled.span`
  font-size: 1rem;
  font-weight: 400;

  line-height: 1.4;

  color: ${(props) => props.theme.colors.gray400};

  margin-top: 0.5rem;
`
