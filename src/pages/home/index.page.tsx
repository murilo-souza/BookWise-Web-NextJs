import { Sidebar } from '@/components/Sidebar'
import { Container, PageTitle } from './styles'
import { LastBookCard } from '@/components/LastBookCard'
import { ChartLineUp } from '@phosphor-icons/react'

export default function Home() {
  return (
    <Container>
      <Sidebar />
      <div />
      <main>
        <PageTitle>
          <ChartLineUp />
          Inicio
        </PageTitle>

        <LastBookCard />
      </main>
    </Container>
  )
}
