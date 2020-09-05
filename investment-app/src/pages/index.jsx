import Head from 'next/head'
import {Button} from 'react-bootstrap'
import styles from '../../styles/Home.module.scss'

export default function Home() {
  return (
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
          <Button OnClick = {router.push('/profiling')}>
            Are y'all ready kids?
          </Button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
