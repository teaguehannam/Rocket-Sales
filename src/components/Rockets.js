import React from 'react';

// Components
import SkuPreview from './SkuPreview.js';

// Data
import availableRockets from '../data/availableRockets.js';


function Rockets() {
	
	return (
		
		<div className="RocketsC">

			{ 
				availableRockets.map((data, index) => {
					return <SkuPreview data={data} key={index} />
				})
			}


		</div>

	);
}

export default Rockets;
