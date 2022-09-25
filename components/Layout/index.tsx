import LayoutExchange from './Exchange'
import LayoutListing from './Listing'
import styles from './Layout.module.scss'

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
  return (
    <>
      <main className={styles.main}>
        <LayoutVariant>{children}</LayoutVariant>
      </main>
    </>
  )
}

export default Layout
