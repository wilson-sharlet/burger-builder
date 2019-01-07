import React, { Component } from 'react';
import Burger from '../../components/Burger';
import BurgerBuildControls from '../../components/Burger/BurgerBuildControls';

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

  render() {
    let removeDisabledInfo = {};
    Object.keys(this.state.ingredients).forEach(ingKey => {
      removeDisabledInfo[ingKey] = (this.state.ingredients[ingKey] <= 0)
    });
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BurgerBuildControls
          add={this.addIngredientHandler}
          remove={this.removeIngredientHandler}
          removeDisabledInfo={removeDisabledInfo}
          totalPrice={this.state.totalPrice}
          handleClick={this.initiatePurchase}
        />
      </>
    )
  }
}

export default BurgerBuilder;
