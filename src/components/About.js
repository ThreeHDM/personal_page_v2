import React, { useState } from 'react';
import './About.css';
import data from '../data/data.json';
import Portfolio from './Portfolio'

function About({ language }) {

	const [text, setText] = useState('aboutShort');
	const [portfolio, setPortfolio] = useState(false)

	const textToggle = (value) => {
		setPortfolio(false);
		setText(value);
	}

	return (
		<div>
			<div className="row">
				<a
					href="https://github.com/ThreeHDM"
					className="button btn-github"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</a>

				<a href="#" className="button btn-cv">
					Curriculum
				</a>

				<a
					href="https://codepen.io/threehdm-the-bashful"
					className="button btn-codepen"
					target="_blank"
					rel="noopener noreferrer"
				>
					Codepen.io
				</a>

				<a
					href="https://www.linkedin.com/in/juanbilardi/"
					className="button btn-linkedin"
					target="_blank"
					rel="noopener noreferrer"
				>
					LinkedIn
				</a>

				<a href="mailto:juanbilardi@gmail.com" className="button btn-mail">
					e-mail
				</a>
			</div>
			<div className="row">
				<div className="link link-about-short" onClick={() => textToggle('aboutShort')}>
					{data[language].aboutLinkShort}
				</div>
				<div className="link link-about-long" onClick={() => textToggle('aboutLong')}>
					{data[language].aboutLinkLong}
				</div>
				<div className="link link-portfolio" onClick={setPortfolio}>
					Some of my work
				</div>
			</div>
			<div className="row">
				<div className="column">
					{portfolio ? (
						<Portfolio language={language} />
					) : (
							<p className="text" dangerouslySetInnerHTML={{ __html: data[language][text] }}></p>
						)}

				</div>
			</div>
		</div >
	);
}

export default About;
