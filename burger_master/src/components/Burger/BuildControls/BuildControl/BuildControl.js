import React from 'react';

import classes from './foo.BuildControl.css';

const buildControl = (props) => (
    <div>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More} onClick={props.added}>More</button>
    </div>
);

export default buildControl;