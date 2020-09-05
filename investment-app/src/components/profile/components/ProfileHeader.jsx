import React from 'react'
import styles from '../../../../styles/Home.module.scss'

export default function ProfileHeader() {
    return (
        <div style={{backgroundColor: 'lightgrey', height: '50px'}}>
            <h5 className={styles.description}>Check your knowledge on investing</h5>
        </div>
    )
}
