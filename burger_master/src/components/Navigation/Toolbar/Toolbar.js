import React from 'react';

import classes from './toolbar.module.css'

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import Items from '../Items/Items'
import Logo from '../../Logo/Logo'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle
            className={classes.Menu}
            clicked={props.drawerToggleClicked}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <Items />
        </nav>
    </header>
);

export default toolbar;