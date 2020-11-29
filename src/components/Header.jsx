import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
	// console.log("Header", props);
	
	return (
		<div className="HeaderC">

			<div className="Content">
				<div className="Brand">
					<Link to="/">Rocketzon</Link>
				</div>

				<nav>
					<Link to="/rockets">Rockets</Link>
					<Link to="/flight_plan">Flight Plan</Link>
					<Link to="/launch">
						<span role="img" aria-label="Rocket">🚀</span>
					</Link>
				</nav>
				
			</div>

		</div>
	);
}

export default Header;
