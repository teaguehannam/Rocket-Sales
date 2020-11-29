import React from 'react';

const TripSelect = (props) => {
	console.log("TripSelect", props);

	return (
		<div className="TripSelectC">

			<div className="Title">
				<h2>Select Flight</h2>
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
	);
}

export default TripSelect;
