import React, { useCallback } from 'react';
import './Menu.css';

function Menu({ language, onLanguageChange }) {
	function handleChange(event) {
		console.log(language);
		// Here, we invoke the callback with the new value
		onLanguageChange(language === 'ES' ? 'EN' : 'ES');
	}

	return (
		<div>
			<div onClick={handleChange} value={language}>
				{language}
			</div>
		</div>
	);
}

export default Menu;
