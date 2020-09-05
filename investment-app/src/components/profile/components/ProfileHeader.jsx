import React from 'react'
import styles from '../../../../styles/Home.module.scss'

export default function ProfileHeader() {
    return (
        <div style={{backgroundColor: 'lightgrey', width: '100%', height: '50px'}}>
            <h6 className={styles.grid}>Check your knowledge on investing</h6>
        </div>
    )
}
