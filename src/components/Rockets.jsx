import React from 'react';

import availableRockets from '../data/availableRockets.js';
import SkuPreview from './SkuPreview.jsx';

import { useSelector } from 'react-redux';
import { selectModel } from '../store/rocket.js';

function Rockets() {

	const rocketModel = useSelector(selectModel);

	React.useEffect(() => {
		if (Object.keys(rocketModel).length > 1) {
			if (document.getElementsByClassName("Active").length > 0) {
				document.getElementsByClassName("Active")[0].className = "SkuPreviewC";
			}
			document.getElementById(rocketModel.title).className = "Active";
		}
	}, [rocketModel])

	return (
		
		<div className="RocketsC">

			<div className="Title">
				<h3>Chosen Rocket</h3>
				<p>{rocketModel.title}</p>
			</div>

			<div className="RocketSkus">
				{ 
					availableRockets.map((data, index) => {

						return <SkuPreview data={data} key={index} />
					})
				}
			</div>

		</div>

	);
}

export default Rockets;
