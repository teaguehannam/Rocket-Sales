import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header.js';
import Home from './components/Home.js';
import SmartShop from './components/SmartShop.js';
import Rockets from './components/Rockets.js';
import Account from './components/Account.js';
import Checkout from './components/Checkout.js';


function App() {

	return (
		<div className="App">

			<Route path="/" component={Header} />
			<Route exact path="/" component={Home} />
			<Route exact path="/smart_shop" component={SmartShop} />
			<Route path="/rockets" component={Rockets} />
			<Route path="/account" component={Account} />
			<Route path="/checkout" component={Checkout} />

		</div>
	);
}

export default App;
