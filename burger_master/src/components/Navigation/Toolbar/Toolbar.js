import React from 'react';

import classes from './toolbar.module.css'

import Logo from '../../Logo/Logo'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Logo/>
    </header>
);

export default toolbar;