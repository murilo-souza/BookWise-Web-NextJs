import { useSession } from 'next-auth/react'
import {
  ActionsContainer,
  Container,
  FormContainer,
  ProfileName,
  UserDetails,
} from './styles'
import { Avatar } from '../../Avatar'
import { RatingStars } from '@/components/RatingStars'
import { FormEvent, useState } from 'react'
import { TextArea } from '../TextArea'
import { ActionIcon } from '../../ActionIcon'
import { Check, X } from '@phosphor-icons/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/axios'

type RatingFormProps = {
  onCancel: () => void
  bookId: string
}

export function RatingForm({ onCancel, bookId }: RatingFormProps) {
  const { data: session } = useSession()
  const user = session?.user

  const [currentRate, setCurrentRate] = useState(0)

  const [description, setDescription] = useState('')

  const submitDisabled = !description.trim() || !currentRate

  const queryClient = useQueryClient()

  const { mutateAsync: handleRate } = useMutation({
    mutationFn: async () => {
      await api.post(`/books/${bookId}/rate`, {
        description,
        rate: currentRate,
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['book', bookId] })
      queryClient.invalidateQueries({ queryKey: ['book'] })
      onCancel()
    },
  })

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    // eslint-disable-next-line no-useless-return
    if (submitDisabled) return
    await handleRate()
  }

  return (
    <Container>
      {user && (
        <UserDetails>
          <section>
            <Avatar alt={user.name} src={user.avatar_url} AvatarSize="md" />
            <ProfileName>{user.name}</ProfileName>
          </section>
          <RatingStars
            size="lg"
            rating={currentRate}
            setRating={setCurrentRate}
          />
        </UserDetails>
      )}
      <FormContainer onSubmit={handleSubmit}>
        <TextArea
          placeholder="Escreva sua avaliação"
          maxLength={450}
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
        <ActionsContainer>
          <ActionIcon
            type="button"
            onClick={onCancel}
            iconColor="purple"
            icon={<X />}
          />
          <ActionIcon
            iconColor="green"
            icon={<Check />}
            disabled={submitDisabled}
          />
        </ActionsContainer>
      </FormContainer>
    </Container>
  )
}
