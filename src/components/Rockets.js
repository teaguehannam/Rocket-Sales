import React from 'react';

import SkuPreview from './SkuPreview.js';

// Photos
import CZRocket from '../resources/rocket/CZ-3C.svg';
import Electron from '../resources/rocket/Electron.png';
import Falcon9 from '../resources/rocket/falcon9.png';
import FalconHeavy from '../resources/rocket/falconHeavy.png';
import MvRocket from '../resources/rocket/mvRocket.png';
import SpaceShuttle from '../resources/rocket/spaceShuttle.png';

function Rockets() {
	
	return (
		
		<div className="RocketsC">

			<SkuPreview title="CZ Rocket" image={CZRocket} />
			<SkuPreview title="Electron" image={Electron} />
			<SkuPreview title="Falcon 9" image={Falcon9} />
			<SkuPreview title="Falcon Heavy" image={FalconHeavy} />
			<SkuPreview title="MV Rocket" image={MvRocket} />
			<SkuPreview title="Space Shuttle" image={SpaceShuttle} />

		</div>

	);
}

export default Rockets;
