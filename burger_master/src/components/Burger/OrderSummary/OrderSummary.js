import React from 'react';

import Aux from '../../../hoc/Aux'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>
                    : {props.ingredients[igKey]}
                </li>
            );
        });

    return(
        <Aux>
            <h3>YOUR ORDER</h3>
            <p>This is your custom burger:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    )
};

export default orderSummary;