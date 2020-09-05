
import Head from 'next/head'
import {Button} from 'react-bootstrap'
import Component from '../../../components/Component'

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component/>
      <Button>
      Are y'all ready kids?
      </Button>
    </div>
  )
}
