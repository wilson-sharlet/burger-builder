import burgerBuilderReducer from './burgerBuilder';
import * as actions from '../actions/actionTypes';

describe('Burger builder reducer', () => {
    it('adds ingredients', () => {
        expect(burgerBuilderReducer(
            { ingredients: { salad: 0 }, totalPrice: 20 },
            { type: actions.ADD_INGREDIENT, ingredient: 'salad' }
        )).toEqual({
            ingredients: { salad: 1 },
            totalPrice: 40.50
        })
    })
});
