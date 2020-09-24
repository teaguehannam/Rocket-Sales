import React from 'react';


function Header() {
	
	return (
		<div className="HeaderC">

			<div className="Content">
				<div className="Brand">
					<a href="https://rocket-sales.netlify.app/">
						Rocketzon
					</a>
				</div>

				<nav>
					<a href="/rockets">Rockets</a>
					{/* eslint-disable-next-line */}
					<a href="#">Customize</a>
					{/* eslint-disable-next-line */}
					<a href="#">Checkout</a>
				</nav>
			</div>

		</div>
	);
}

export default Header;
