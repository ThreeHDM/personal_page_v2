import React from 'react';
import './Menu.css';

function Menu({ language, onLanguageChange }) {
	function handleChange() {
		console.log(language);
		// Here, we invoke the callback with the new value
		onLanguageChange(language === 'ES' ? 'EN' : 'ES');
	}

	return (
		<div>
			<div className="menu-container">
				<nav className="menu">
					<ul>
						<li>
							<div onClick={handleChange} value={language}>
								{language === 'ES' ? 'EN' : 'ES'}
							</div>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Menu;
