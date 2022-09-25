import LayoutExchange from './Exchange'
import LayoutListing from './Listing'
import styles from './Layout.module.scss'
import Head from '../Head'
import Image from 'next/image'
import { Footer } from 'antd/lib/layout/layout'

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
    <div className={styles.container}>
      <Head />
      <main className={styles.main}>
        <LayoutVariant>{children}</LayoutVariant>
        <Footer>
          <footer className={styles.footer}>
            <a
              href="https://www.coingecko.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <span className={styles.logo}>
                <Image
                  src="https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png"
                  alt="Coingecko Logo"
                  width={200}
                  height={50}
                />
              </span>
            </a>
          </footer>
        </Footer>
      </main>
    </div>
  )
}

export default Layout
