import React from 'react'
import BurguerIngredient from './BurguerIngredient/BurguerIngridient';

const burguer = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_, i) => {
                <BurguerIngredient key={ingKey + i} type={ingKey} />
            });
        })
        .reduce((arr,el) => {
            return arr.concat(el)
        },[]);
    return (
        <div className={classes.Burguer}>
            <BurguerIngredient type="bread-top" />
            {transformedIngredients}
            <BurguerIngredient type="bread-bottom" />
        </div>
    );
};

export default burguer;