import React from 'react'

import classes from './logo.module.css'

import burgerLogo from '../../assets/burger.svg'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt='burguer'/>
    </div>
);

export default logo