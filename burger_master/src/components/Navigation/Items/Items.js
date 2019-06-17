import React from 'react'

import classes from './items.module.css'

import Item from './Item/Item'

const items = () =>(
    <ul className={classes.Items}>
        <Item link="/" active>Burguer Builder</Item>
        <Item link="/">Checkout</Item>
    </ul>
);

export default items;