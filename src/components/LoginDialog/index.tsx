import React, { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { DialogClose, DialogContent, DialogOverlay, Heading } from './styles'
import { X } from '@phosphor-icons/react'
import GoogleLogo from '../../assets/google.svg'
import GitHubLogo from '../../assets/github.svg'
import { SigninButton } from '../SigninButton'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

type LoginDialogProps = {
  children: ReactNode
}

export function LoginDialog({ children }: LoginDialogProps) {
  const router = useRouter()

  const paramBookId = router.query.book as string
  // eslint-disable-next-line no-extra-boolean-cast
  const callbackUrl = !!paramBookId
    ? `/explore?book=${paramBookId}`
    : '/explore'

  const handleSignin = (provider?: string) => {
    if (!provider) {
      router.push(callbackUrl)
      return
    }
    signIn(provider, {
      callbackUrl,
    })
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>
          <div>
            <Heading>Faça login para deixar sua avaliação</Heading>
            <SigninButton
              img={GoogleLogo}
              title="Entrar com Google"
              onClick={() => handleSignin('google')}
            />
            <SigninButton
              img={GitHubLogo}
              title="Entrar com GitHub"
              onClick={() => handleSignin('github')}
            />
          </div>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
