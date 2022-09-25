import { Layout } from 'antd'
import { ILayoutProps } from '.'

export interface ILayoutListingProps extends ILayoutProps {}
const LayoutListing = <T extends ILayoutListingProps>({ children }: T) => {
  return <Layout>{children}</Layout>
}

export default LayoutListing
