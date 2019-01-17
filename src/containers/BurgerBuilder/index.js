import React, { Component } from 'react';
import axios from 'axios';
import Burger from '../../components/Burger';
import BurgerBuildControls from '../../components/Burger/BurgerBuildControls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary';
import withError from '../../hoc/withError';

const INGREDIENT_RATES = {
    salad: 20.50,
    cheese: 10.60,
    meat: 50.30,
    bacon: 30.10,
}

class BurgerBuilder extends Component {
    constructor() {
        super();
        this.state = {
            ingredients: {
                cheese: 0,
                bacon: 0,
                salad: 0,
                meat: 0,
            },
            totalPrice: 0,
            showOrderModal: false,
        }
    }

    addIngredientHandler = (type) => {
        this.setState((state) => {
            return {
                ingredients: {
                    ...state.ingredients,
                    [type]: state.ingredients[type] + 1,
                },
                totalPrice: state.totalPrice + INGREDIENT_RATES[type]
            }
        });
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] < 1) {
            return;
        }
        this.setState((state) => {
            return {
                ingredients: {
                    ...state.ingredients,
                    [type]: state.ingredients[type] - 1,
                },
                totalPrice: state.totalPrice - INGREDIENT_RATES[type]
            }
        });
    }

    initiatePurchase = () => {
        this.setState({ showOrderModal: true })
    }

    cancelPurchase = () => {
        this.setState({ showOrderModal: false })
    }

    checkout = () => {
        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');

        this.props.history.push({
            pathname: '/checkout',
            search: `?${queryString}`,
        });
    }

    render() {
        let removeDisabledInfo = {};
        Object.keys(this.state.ingredients).forEach(ingKey => {
            removeDisabledInfo[ingKey] = (this.state.ingredients[ingKey] <= 0)
        });
        return (
            <>
                <Modal show={this.state.showOrderModal} modalClosed={this.cancelPurchase}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        close={this.cancelPurchase}
                        checkout={this.checkout}
                        totalPrice={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BurgerBuildControls
                    add={this.addIngredientHandler}
                    remove={this.removeIngredientHandler}
                    removeDisabledInfo={removeDisabledInfo}
                    totalPrice={this.state.totalPrice}
                    purchaseable={(this.state.totalPrice > 0)}
                    handleClick={this.initiatePurchase}
                />
            </>
        )
    }
}

export default withError(BurgerBuilder, axios);
