import React, { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Menu from './components/Menu';
function App() {
	const [language, setlanguage] = useState('ES');

	function handleChange(newValue) {
		setlanguage(newValue);
	}

	return (
		<div className="App">
			<Menu language={language} onLanguageChange={handleChange} />
			<Header language={language} onLanguageChange={handleChange} />
			<About language={language} onLanguageChange={handleChange} />
		</div>
	);
}

export default App;
