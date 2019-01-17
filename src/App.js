import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import Checkout from './containers/Checkout';
import Orders from './containers/Orders';
class App extends Component {
  render() {
    return (
      <Layout>
        <Route path='/checkout' component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path='/' exact component={BurgerBuilder} />
      </Layout>
    );
  }
}

export default App;
