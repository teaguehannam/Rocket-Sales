import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header.js';
import Rockets from './components/Rockets.js';

function App() {
	return (
		<div className="App">

			<Route path="/" component={Header} />
			<Route path="/rockets" component={Rockets} />

		</div>
	);
}

export default App;
