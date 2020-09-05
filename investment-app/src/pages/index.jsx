import Head from 'next/head'
import { Button } from 'react-bootstrap'
import Layout from '../components/common/Layout'
import styles from '../../styles/Home.module.scss'
import Loginmodal from '../components/common/Loginmodal'

const Home = () => {

  return (
    <Layout>
      <div className={styles.container1}>
        <Head>
          <title>P.E.A.R.</title>
          <link rel="icon" href="/pear.svg" />
        </Head>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Welcome to P.E.A.R.!
        </h1>
        </header>
        <div className={styles.center}>
          <div className={styles.main_title}>
            Want to learn how to invest?
          </div>

          <div className={styles.grid}>
            {/* <Button Onclick={Loginmodal}>
            Are y'all ready kids?
          </Button> */}
            <Loginmodal />
          </div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.title2}>
          NEWS
        </div>
      </div>
    </Layout>
  )
}

export default Home
