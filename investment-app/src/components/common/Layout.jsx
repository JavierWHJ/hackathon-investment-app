import React from 'react'
import Header from './Header';
import styles from './Layout.module.scss';

const Layout = (props) => {
    return (
        <>
            <Header/>
            {props.children}
        </>
    );
}

export default Layout;

