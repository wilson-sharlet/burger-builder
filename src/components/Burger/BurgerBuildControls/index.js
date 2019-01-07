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
      {ingredients.map(ingredient => (<BurgerBuildControl
        key={ingredient.label}
        ingredient={ingredient.label}
        add={() => props.add(ingredient.type)}
        remove={() => props.remove(ingredient.type)}
        disabled={props.removeDisabledInfo[ingredient.type]}
      />))}
    </div>
  )
}

export default BurgerBuildControls;
