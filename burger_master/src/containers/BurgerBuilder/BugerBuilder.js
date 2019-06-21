import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import axios from '../../axios-orders';
import withErrorHandling from '../../hoc/withErrorHandler/withErrorHandler';


import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import Order from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.0,
    bacon: 0.7
};


class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad:0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({purchasable: sum>0});
    }

    addIngredentHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice:newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredentHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = (oldCount===0) ? 0 : (oldCount - 1);
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDiscount= INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDiscount;
        this.setState({
            totalPrice:newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice
        }
        axios.post('/orders', order)
        .then(response => { this.setState({loading: false, purchasing: false}) })

    }

    render() {

        let order =  <Order
        ingredients={this.state.ingredients}
        price = {this.state.totalPrice}
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        />

        if( this.state.loading ){
            order = <Spinner/>
        }

        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {order}
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    disabled={this.state.ingredients}
                    ingredientAdded={this.addIngredentHandler}
                    ingredientRemoved={this.removeIngredentHandler}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                />
            </Aux>
        );
    }
}

export default withErrorHandling(BurgerBuilder, axios);