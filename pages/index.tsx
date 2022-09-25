import Head from '@/components/Head'
import Layout from '@/components/Layout'
import Dircryptex from '@/features/Dircryptex'
import { Footer } from 'antd/lib/layout/layout'
import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <Layout variant="listing">
      <Dircryptex styles={styles} />
    </Layout>
  )
}

export default Home
