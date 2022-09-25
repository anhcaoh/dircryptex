import Layout from '@/components/Layout'
import Dircryptex from '@/features/Dircryptex'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout variant="listing">
      <Dircryptex />
    </Layout>
  )
}

export default Home
