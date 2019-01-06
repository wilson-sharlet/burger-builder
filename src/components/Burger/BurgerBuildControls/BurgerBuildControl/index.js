import React from 'react';
import './BurgerBuildControl.css';

const BurgerBuildControl = (props) => (
    <div className='BuildControl'>
        <div className='Label'>{props.ingredient}</div>
        <button className='More' onClick={props.add}>+</button>
        <button className='Less' onClick={props.remove} disabled={props.disabled}>-</button>
    </div>
)

export default BurgerBuildControl;