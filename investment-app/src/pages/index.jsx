import Head from 'next/head'
import {Button} from 'react-bootstrap'
import Layout from '../components/common/Layout'
import styles from '../../styles/Home.module.scss'
import Loginmodal from '../components/common/Loginmodal'

const Home = () => {

  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>P.E.A.R.</title>
        <link rel="icon" href="/pear.svg" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to P.E.A.R.!
        </h1>

        <div className={styles.grid}>
          {/* <Button Onclick={Loginmodal}>
            Are y'all ready kids?
          </Button> */}
          <Loginmodal />
        </div>
      </main>
    </div>
    </Layout>
  )
}

export default Home
