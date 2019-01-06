import React from 'react';

const OrderSummary = (props) => {
    const items = Object.keys(props.ingredients).map(ingKey => (
        <li key={ingKey}>{ingKey}: {props.ingredients[ingKey]}</li>
    ));

    return(
        <>
            <p>You have selected the following items for the burger filling</p>
            <ul>{items}</ul>
            <button>Checkout</button>
        </>
    )
}

export default OrderSummary;
