import { Button, Layout } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ILayoutProps } from '.'

export interface ILayoutListingProps extends ILayoutProps {}
const LayoutExchange = <T extends ILayoutListingProps>({ children }: T) => {
  const router = useRouter()
  const goBackQuitely = () => router.push('/', undefined, { shallow: true })
  return (
    <Layout>
      <Layout>
        <Button type="link" onClick={goBackQuitely}>
          ← Go back
        </Button>
      </Layout>
      <Layout>{children}</Layout>
    </Layout>
  )
}

export default LayoutExchange
