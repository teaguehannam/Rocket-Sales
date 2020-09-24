import React from 'react';


const SkuPreview = props => {
	//console.log("SkuPreview", props);

	let successRate = Math.round((props.data.totalLaunches - props.data.failedLaunches) / props.data.totalLaunches * 100);
	
	return (
		
		<div className="SkuPreviewC">

			<div className="Title">
				<h2>{props.data.title}</h2>
				<p>{props.data.cost}</p>
			</div>

			<div className="Preview">
				<img src={props.data.image} alt="Rocket Thumbnail" />
			</div>

			<div className="Stats">
				<div className="Box"> 
					<p>{successRate}% success Rate</p>
				</div>		

				<div className="Box"> 
					<p>Earth orbit:</p>
					<p>{props.data.LEO}</p>
				</div>

				{
					props.data.GTO ? 
						<div className="Box"> 
							<p>Geo transfer:</p>
							<p>{props.data.GTO}</p> 
						</div>
					: <div />
				}
				{
					props.data.MTO ? 
						<div className="Box"> 
							<p>Mars transfer:</p>
							<p>{props.data.MTO}</p> 
						</div>
					: <div />
				}
				{
					props.data.PTO ? 
						<div className="Box"> 
							<p>Pluto transfer:</p>
							<p>{props.data.PTO}</p> 
						</div>
					: <div />
				}
			</div>

		</div>

	);
}

export default SkuPreview;
