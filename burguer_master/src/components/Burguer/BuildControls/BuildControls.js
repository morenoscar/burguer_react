import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuilsControls';


const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const builsControls = (props) => {
    <div className={classes.BuilsControls}>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label}/>
        ))};
    </div>
};

export default builsControls;