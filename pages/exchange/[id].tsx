import Layout from '@/components/Layout'
import ExchangeFeat from '@/features/Exchange'
import { Button } from 'antd'
import { useRouter } from 'next/router'

const Exchange = () => {
  const router = useRouter()
  const { id } = router.query
  const goBackQuitely = () => router.push('/', undefined, { shallow: true })

  return (
    <Layout
      variant="exchange"
      slot={
        <Button
          onClick={goBackQuitely}
          style={{
            marginLeft: '-9.75rem',
            marginTop: '-1rem',
            position: 'absolute',
          }}
        >
          ← Go back
        </Button>
      }
    >
      {(id && <ExchangeFeat id={id as string} />) || null}
    </Layout>
  )
}

export default Exchange
