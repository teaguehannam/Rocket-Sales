import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import SmartShop from './components/SmartShop.jsx';
import Rockets from './components/Rockets.jsx';
import Account from './components/Account.jsx';
import Checkout from './components/Checkout.jsx';


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
