import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className="HomeC">

			<div className="Intro"> 
				<h2>Welcome!</h2>
				<h4><Link to="/rockets">Go to Rockets tab to pick out a rocket.</Link></h4>
			</div>
			
		</div>
	);
}

export default Home;
