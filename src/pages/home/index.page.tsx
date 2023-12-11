import { Container, HeaderTitle, Header, PageTitle, Wrapper } from './styles'
import { LastBookCard } from '@/components/LastBookCard'
import { CaretRight, ChartLineUp } from '@phosphor-icons/react'
import { LastRatingCard } from '@/components/LastRatingCard'
import { NextPageWithLayout } from '../_app.page'
import { DefaultLayout } from '@/layouts/DefaultLayout'

const HomePage: NextPageWithLayout = () => {
  return (
    <Container>
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
      <div>dwdw</div>
    </Container>
  )
}

HomePage.getLayout = (page) => {
  return <DefaultLayout title="Inicio">{page}</DefaultLayout>
}

export default HomePage
