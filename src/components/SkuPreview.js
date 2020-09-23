import React from 'react';


function SkuPreview(props) {
	console.log(props);
	
	return (
		
		<div className="SkuPreviewC">

			<h2>{props.title}</h2>
			<img src={props.image} alt={props.image} />
			<p>Buy Now</p>

		</div>

	);
}

export default SkuPreview;
