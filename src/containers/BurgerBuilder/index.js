import React, { Component } from 'react';
import axios from '../../axios-orders';
import { connect } from 'react-redux';
import Burger from '../../components/Burger';
import BurgerBuildControls from '../../components/Burger/BurgerBuildControls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary';
import Spinner from '../../components/UI/Spinner';
import withError from '../../hoc/withError';
import * as burgerBuilderActions from '../../store/actions';

export class BurgerBuilder extends Component {
    constructor() {
        super();
        this.state = {
            showOrderModal: false,
        }
    }

    componentDidMount = () => {
        this.props.initIngredients();
    }

    initiatePurchase = () => {
        this.setState({ showOrderModal: true })
    }

    cancelPurchase = () => {
        this.setState({ showOrderModal: false })
    }

    checkout = () => {
        // const queryParams = [];
        // for (let i in this.props.ingredients) {
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ingredients[i]));
        // }
        // queryParams.push('price=' + this.props.totalPrice);
        // const queryString = queryParams.join('&');

        this.props.history.push({
            pathname: '/checkout',
            // search: `?${queryString}`,
        });
    }

    render() {
        let removeDisabledInfo = {};
        let burger = <Spinner />;
        let orderSummary = null;
        if (this.props.ingredients) {
            burger = (<><Burger ingredients={this.props.ingredients} />
                <BurgerBuildControls
                    add={this.props.addIngredientHandler}
                    remove={this.props.removeIngredientHandler}
                    removeDisabledInfo={removeDisabledInfo}
                    totalPrice={this.props.totalPrice}
                    purchaseable={(this.props.totalPrice.toFixed(2) > 10)}
                    handleClick={this.initiatePurchase}
                /></>);
            Object.keys(this.props.ingredients).forEach(ingKey => {
                removeDisabledInfo[ingKey] = (this.props.ingredients[ingKey] <= 0)
            });
            orderSummary = (<OrderSummary
                ingredients={this.props.ingredients}
                close={this.cancelPurchase}
                checkout={this.checkout}
                totalPrice={this.props.totalPrice}
            />);
        }
        if (this.props.error) {
            burger=<h3>There was an error in loading the ingredients</h3>
        }

        return (
            <>
                <Modal show={this.state.showOrderModal} modalClosed={this.cancelPurchase}>
                    {orderSummary}
                </Modal>
                {burger}
            </>
        )
    }
}

const mapStateToProps = state => ({
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    error: state.error,
});

const mapDispatchToProps = dispatch => ({
    addIngredientHandler: (ingredient) => dispatch(burgerBuilderActions.addIngredient(ingredient)),
    removeIngredientHandler: (ingredient) => dispatch(burgerBuilderActions.removeIngredient(ingredient)),
    initIngredients: () => dispatch(burgerBuilderActions.initIngredients()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withError(BurgerBuilder, axios));
