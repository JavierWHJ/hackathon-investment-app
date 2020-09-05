
import Head from 'next/head'
import {Button} from 'react-bootstrap'
import Layout from '../../../components/common/Layout'

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button>
      Are y'all ready kids?
      </Button>
    </Layout>
  )
}
