import React from 'react'
import styles from '../../../../styles/Home.module.scss'

export default function ProfileHeader() {
    return (
        <div style={{backgroundColor: 'lightgrey', height: '40px'}}>
            <h5 className={styles.description}>Check how much you know on investing!</h5>
        </div>
    )
}
