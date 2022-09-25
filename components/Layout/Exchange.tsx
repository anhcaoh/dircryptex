import { Button, Col, Layout } from 'antd'
import { useRouter } from 'next/router'
import { ILayoutProps } from '.'

export interface ILayoutListingProps extends ILayoutProps {}
const LayoutExchange = <T extends ILayoutListingProps>({ children }: T) => {
  const router = useRouter()
  const goBackQuitely = () => router.push('/', undefined, { shallow: true })
  return (
    <Layout>
      <Col span={24}>
        <Layout>
          <Button type="link" onClick={goBackQuitely}>
            ← Go back
          </Button>
        </Layout>
        <Layout>{children}</Layout>
      </Col>
    </Layout>
  )
}

export default LayoutExchange
