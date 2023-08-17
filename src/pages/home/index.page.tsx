import { Sidebar } from '@/components/Sidebar'
import { Container, HeaderTitle, Header, PageTitle, Wrapper } from './styles'
import { LastBookCard } from '@/components/LastBookCard'
import { CaretRight, ChartLineUp } from '@phosphor-icons/react'
import { LastRatingCard } from '@/components/LastRatingCard'

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
        <Wrapper>
          <Header>
            <HeaderTitle>Sua última leitura</HeaderTitle>
            <button>
              Ver todas <CaretRight size={16} />
            </button>
          </Header>
          <LastBookCard />
        </Wrapper>
        <Wrapper>
          <Header>
            <HeaderTitle>Avaliações mais recentes</HeaderTitle>
          </Header>
          <LastRatingCard />
        </Wrapper>
      </main>
    </Container>
  )
}
