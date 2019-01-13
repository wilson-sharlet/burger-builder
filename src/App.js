import React, { Component } from 'react';
import Layout from './components/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import Checkout from './containers/Checkout';
class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder />
        <Checkout />
      </Layout>
    );
  }
}

export default App;
