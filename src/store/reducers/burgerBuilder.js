import * as actions from '../actions/actionTypes';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
    },
    totalPrice: 10,
};

const INGREDIENT_RATES = {
    salad: 20.50,
    cheese: 10.60,
    meat: 50.30,
    bacon: 30.10,
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]: state.ingredients[action.ingredient] + 1,
                },
                totalPrice: state.totalPrice + INGREDIENT_RATES[action.ingredient]
            }
        case actions.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]: state.ingredients[action.ingredient] - 1,
                },
                totalPrice: state.totalPrice - INGREDIENT_RATES[action.ingredient]
            }
        default:
            return state;
    }
};

export default reducer;