import React from 'react';
import SkuPreview from './SkuPreview.jsx';
import TripSelect from './TripSelect.jsx';

import { useSelector } from 'react-redux';
import { selectModel } from '../store/rocket.js';

function FlightPlan() {

	const rocketModel = useSelector(selectModel);
	let rocketDiv;
	let tripDiv;

	if (Object.keys(rocketModel).length < 1) {
		rocketDiv = <p><a href="/rockets">Pick a rocket</a></p>;
		tripDiv = <h4>Select Trip</h4>;
	} else {
		rocketDiv = <SkuPreview data={rocketModel} />		
		tripDiv = <TripSelect data={rocketModel} />
	}

	return (
		<div className="FlightPlanC">

			<div className="Title">
				<h2>Plan your flight</h2>
			</div>

			{rocketDiv}
			
			<div className="Flight">
				{tripDiv}
			</div>

			<div className="Summary">
				<h4>Flight Summary</h4>
			</div>

		</div>
	);
}

export default FlightPlan;
