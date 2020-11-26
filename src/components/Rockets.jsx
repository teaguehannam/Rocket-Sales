import React from 'react';

// Get data and display component
import availableRockets from '../data/availableRockets.js';
import SkuPreview from './SkuPreview.jsx';

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
