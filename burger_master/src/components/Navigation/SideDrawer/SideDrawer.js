import React from 'react'

import classes from './sideDrawer.module.css'

import Aux from '../../../hoc/Aux'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Items from '../Items/Items'
import Logo from '../../Logo/Logo'

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if(props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <Items />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;