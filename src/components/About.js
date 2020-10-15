import React from 'react';
import './About.css';
import data from '../data/data.json';

function About({ language }) {
	return (
		<div>
			<div className="row">
				<a
					href="https://github.com/ThreeHDM"
					className="button btn-github"
					target="_blank"
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
				>
					Codepen.io
				</a>

				<a href="mailto:juanbilardi@gmail.com" className="button btn-mail">
					e-mail
				</a>
			</div>
			<div className="row">

				<a href="#" className="link link-about-short">
					{data[language].aboutLinkShort}
				</a>
				<a href="#" className="link link-about-long">
					{data[language].aboutLinkLong}
				</a>

			</div>
			<div className="row">
				<div className="column">
					<p className="text" dangerouslySetInnerHTML={{ __html: data[language].aboutShort }}></p>
				</div>
			</div>
		</div >
	);
}

export default About;
