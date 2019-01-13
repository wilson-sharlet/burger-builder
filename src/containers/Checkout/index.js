import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            cheese: 0,
            meat: 2,
            bacon: 1,
        },
    }

    render () {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} />
            </div>
        );
    }
}

export default Checkout;