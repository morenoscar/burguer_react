import React, {Component} from 'react';

import Aux from '../../hoc/Aux';

import Burguer from '../../components/Burguer/Burguer';
import BuilsControls from '../../components/Burguer/BuildControls/BuildControls';

class BurguerBuilder extends Component{
    state = {
        ingredients: {
            salad:1,
            bacon: 1,
            cheese: 2,
            meat: 1
        },
        totalPrice: 4
    }

    addIngredentHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
    }

    render() {
        return(
            <Aux>
                <Burguer ingredients={this.state.ingredients} />
                <BuilsControls />
            </Aux>
        ); 
    }
}

export default BurguerBuilder;