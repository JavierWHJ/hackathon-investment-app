import Head from 'next/head'
import { useRouter } from 'next/router'
import ProfileSelectionContainer from '../../components/profile/container/ProfileSelectionContainer'
import styles from '../../../styles/Home.module.scss'

export default function Profile() {
    const router = useRouter()

    return (
        <div>
            <Head>
                <title>Creating Your Profile</title>
                <link rel="icon" href="/pear.svg" />
            </Head>
            <main className={styles.center}>
            {/* <h1>
                How much do you know about investing?
            </h1> */}
                <ProfileSelectionContainer/>
            </main>
            
        </div>
    )
}

