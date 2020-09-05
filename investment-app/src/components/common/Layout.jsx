import React from 'react'
import styles from './Layout.module.scss';

const Layout = (props) => {
    return (
        <>
            {props.children}
        </>
    );
}

export default Layout;

