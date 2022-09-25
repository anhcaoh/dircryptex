import { Button, Col, Layout, Space } from 'antd'
import { useRouter } from 'next/router'
import { ILayoutProps } from '.'

export interface ILayoutListingProps extends ILayoutProps {}
const LayoutExchange = <T extends ILayoutListingProps>({ children }: T) => {
  return (
    <Layout>
      <Space direction="vertical" size="large">
        <Col span={24}>{children}</Col>
      </Space>
    </Layout>
  )
}

export default LayoutExchange
