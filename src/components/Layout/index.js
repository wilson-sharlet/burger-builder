import React from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar';

const Layout = (props) => {
    return(
        <>
            <Toolbar />
            <main className={classes.Content}>{props.children}</main>
        </>
    )
}

export default Layout;