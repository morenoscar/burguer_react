import React from 'react';

import Aux from '../../../hoc/Aux'

import Button from '../../UI/Button/Button'

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
            <b>Total Price: {props.price.toFixed(2)}</b>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;