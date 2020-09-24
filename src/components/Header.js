import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	
	return (
		<div className="HeaderC">

			<div className="Content">
				<div className="Brand">
					<Link to="/">Rocketzon</Link>
				</div>

				<nav>
					<Link to="/rockets">Rockets</Link>
					<Link to="/account">Account</Link>
					<Link to="/checkout">
						<span role="img" aria-label="Cart Logo">🛒</span>
					</Link>
				</nav>
				
			</div>

		</div>
	);
}

export default Header;
