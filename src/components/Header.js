import React from 'react';
import webDev from '../assets/img/web-dev.svg';
import './Header.css';

function Header() {
	return (
		<div>
			<div className="row">
				<div className="column">
					<img src={webDev} className="dev-img" alt="logo" />
				</div>
				<div className="column">
					<h1 className="title">Juan Bilardi</h1>
					<h2 className="subtitle">FullStack Developer</h2>
				</div>
			</div>
		</div>
	);
}

export default Header;
