
import Head from 'next/head'
import {Button} from 'react-bootstrap'
import { useRouter } from 'next/router'

export default function Portfolio() {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button onClick={() => router.push(router.pathname + '/hello')}>
      Are y'all ready kids?
      </Button>
    </div>
  )
}
