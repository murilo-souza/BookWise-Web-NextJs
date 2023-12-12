import { PopularBooks } from '@/components/PopularBooks'
import { Container } from './styles'
import { LastRating } from '@/components/LastRating'

export function Home() {
  return (
    <Container>
      <LastRating />
      <PopularBooks />
    </Container>
  )
}
