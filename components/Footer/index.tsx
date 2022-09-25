import { Footer as FooterLayout } from 'antd/lib/layout/layout'
import Image from 'next/image'
const Footer = ({ styles }: any) => {
  return (
    <>
      <FooterLayout>
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
      </FooterLayout>
    </>
  )
}
export default Footer
