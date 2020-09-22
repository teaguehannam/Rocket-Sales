import React from 'react';

import BGFX from '../resources/gravityFx1.gif';

function Header() {
	
	
	return (
		<div className="HeaderC">

			<div className="Content">
				<div className="Brand">
					<img src={BGFX} alt="Cool effects" />
					<h2>Rocketzon</h2>
				</div>

				<nav>
					<a href="/rockets">Rockets</a>
					<a href="#">Customize</a>
					<a href="#">Checkout</a>
				</nav>
			</div>

		</div>
	);
}

export default Header;
