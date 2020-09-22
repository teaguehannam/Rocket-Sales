import React from 'react';

import ChaoShip from '../resources/chaoShip.gif';
import FalconHeavy from '../resources/falconHeavy.png';
import MvRocket from '../resources/mvRocket.png';
import SpaceShuttle from '../resources/spaceShuttle.png';

function Rockets() {
	
	return (
		
		<div className="RocketsC">

			<img src={ChaoShip} alt="ChaoShip"/>
			<img src={FalconHeavy} alt="FalconHeavy"/>
			<img src={MvRocket} alt="MvRocket" alt="Mv Rocket" />
			<img src={SpaceShuttle} alt="SpaceShuttle"/>

		</div>

	);
}

export default Rockets;
