import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Rockets from './components/Rockets.jsx';
import FlightPlan from './components/FlightPlan.jsx';
import Launch from './components/Launch.jsx';

function App() {

	return (
		<div className="App">

			<Header />
			<Route exact path="/" component={Home} />
			<Route path="/rockets" component={Rockets} />
			<Route path="/flight_plan" component={FlightPlan} />
			<Route path="/launch" component={Launch} />

		</div>
	);
}

export default App;
