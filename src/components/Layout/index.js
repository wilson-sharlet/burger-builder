import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';

class Layout extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }

    sideDrawerCloseHandler = () => {
        this.setState({ open: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState(state => {
            return { open: !state.open }
        })
    }

    render() {
        return (
            <>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.open} closed={this.sideDrawerCloseHandler} />
                <main className={classes.Content}>{this.props.children}</main>
            </>
        )
    }
}

export default Layout;