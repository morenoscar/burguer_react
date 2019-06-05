import React from 'react';
import PropTypes from 'prop-types';

const burguerIngredient = (props) => {
    let ingredient = null;

    switch (props.type){
        case('bread-bottom'):
            ingredient = <div className = {classes.BreadBottom}></div>
            break;
        case('bread-top'):
            ingredient = (
                <div className = {classes.BreadTop}>
                    <div className = {classes.Seeds}></div>
                </div> 
            )
                break;
        case('meat'):
            ingredient = <div className = {classes.Meat}></div>
            break;
        case('cheese'):
            ingredient = <div className = {classes.Cheese}></div>
            break;
        case('beacon'):
            ingredient = <div className = {classes.Beacon}></div>
            break;
    }
};

burguerIngredient.prototype = {
    type: PropTypes.string.isRequired
};

export default burguerIngredient