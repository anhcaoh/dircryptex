import LayoutExchange from './Exchange'
import LayoutListing from './Listing'
import Branding from '@/components/Branding'
import Head from '@/components/Head'
import Footer from '@/components/Footer'
import styles from './Layout.module.scss'

export interface ILayoutProps<T = any> {
  variant?: 'listing' | 'exchange'
  slot?: JSX.Element | JSX.Element[]
  children?: JSX.Element | JSX.Element[] | T
}
export const LAYOUT_VARIANTS = {
  listing: LayoutListing,
  exchange: LayoutExchange,
}
const Layout = <T extends ILayoutProps>({
  variant = 'listing',
  slot,
  children,
}: T) => {
  const LayoutVariant = LAYOUT_VARIANTS[variant]
  return (
    <div className={styles.container}>
      <Head />
      <main className={styles.main}>
        <LayoutVariant>
          <Branding styles={styles} />
          {slot}
          {children}
        </LayoutVariant>
        <Footer styles={styles}></Footer>
      </main>
    </div>
  )
}

export default Layout
