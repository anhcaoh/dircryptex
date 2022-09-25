import LayoutExchange from './Exchange'
import LayoutListing from './Listing'

export interface ILayoutProps<T = any> {
  variant?: 'listing' | 'exchange'
  children?: JSX.Element | JSX.Element[] | T
}
export const LAYOUT_VARIANTS = {
  listing: LayoutListing,
  exchange: LayoutExchange,
}
const Layout = <T extends ILayoutProps>({
  variant = 'listing',
  children,
}: T) => {
  const LayoutVariant = LAYOUT_VARIANTS[variant]
  return <LayoutVariant>{children}</LayoutVariant>
}

export default Layout
