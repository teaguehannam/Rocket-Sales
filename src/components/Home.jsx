import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className="HomeC">

			<div className="Intro"> 
				<h2>Welcome!</h2>
			</div>

			<div className="RocketPreview"> 
				<h4><Link to="/rockets">Go to Rockets tab to pick out a rocket.</Link></h4>
				<p>- or -</p>
				<h4><Link to="/smart_shop">Use AI assistant to find your ideal rocket.</Link> </h4>
			</div>
			
			<div className="Account">
				<p><Link to="/account">Login/Register in Account tab</Link></p>
			</div>

			<div className="PS"> 
				<p>*Website still being built*</p>
			</div>

		</div>
	);
}

export default Home;
