import { DefaultLayout } from '@/layouts/DefaultLayout'
import { Home } from './home'
import { NextPageWithLayout } from './_app.page'

const Homepage: NextPageWithLayout = () => {
  return <Home />
}

Homepage.getLayout = (page) => {
  return <DefaultLayout title="Inicio">{page}</DefaultLayout>
}

export default Homepage
