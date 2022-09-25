import Layout from '@/components/Layout'
import { useRouter } from 'next/router'

const Exchange = () => {
  const router = useRouter()
  const { id } = router.query
  return <Layout variant="exchange">{id}</Layout>
}

export default Exchange
