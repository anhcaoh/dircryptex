import Layout from '@/components/Layout'
import Dircryptex from '@/features/Dircryptex'
import { Footer } from 'antd/lib/layout/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dircryptex: Directory of Top Crypto Exchanges</title>
        <meta name="title" content="Dircryptex" />
        <meta name="description" content="Directory of Top Crypto Exchanges" />
        <link rel="icon" href="https://www.coingecko.com/favicon.ico" />
      </Head>

      <Layout variant="listing">
        <main className={styles.main}>
          <Dircryptex styles={styles} />
        </main>
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
      </Layout>
    </div>
  )
}

export default Home
