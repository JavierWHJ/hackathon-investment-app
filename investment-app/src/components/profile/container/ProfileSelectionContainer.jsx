import React from 'react'
import ProfileSelection from '../components/ProfileSelection'
import ProfileHeader from '../components/ProfileHeader';
import styles from '../../../../styles/Home.module.scss'

const ProfileSelectionContainer = () => {
    return (
        <body className={styles.center}>
            {/* <div style={{backgroundColor: 'lightgrey', width:'1010px'}}>
                <ProfileHeader/>
            </div> */}
            <div>
                <ProfileSelection/>
            </div>
        </body>
        
    );
}

export default ProfileSelectionContainer;