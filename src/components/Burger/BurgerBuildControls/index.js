import React from 'react';
import BurgerBuildControl from './BurgerBuildControl';
import './BurgerBuildControls.css';

const ingredients = [
    { label: 'Cheese', type: 'cheese' },
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
];

const BurgerBuildControls = (props) => {
    return (
        <div className='BuildControls'>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
            {ingredients.map(ingredient => (<BurgerBuildControl
                key={ingredient.label}
                ingredient={ingredient.label}
                add={() => props.add(ingredient.type)}
                remove={() => props.remove(ingredient.type)}
                disabled={props.removeDisabledInfo[ingredient.type]}
            />))}
            <button className='OrderButton' disabled={!props.purchaseable} onClick={props.handleClick}>
                Order Now!
            </button>
        </div>
    )
}

export default BurgerBuildControls;