import React from 'react';
import './About.css';
import data from '../data/data.json';

function About({ language }) {
	return (
		<div>
			<div className="row">
				<a href="#" className="button btn-about">
					{data[language].aboutLink}
				</a>

				<a href="#" className="button btn-github">
					GitHub
				</a>

				<a href="#" className="button btn-github">
					Curriculum
				</a>

				<a href="#" className="button btn-github">
					Codepen.io
				</a>

				<a href="#" className="button btn-github">
					GitHub
				</a>
			</div>
			<div className="row">
				<div className="column">
					<p className="text">{data[language].about}</p>
				</div>
			</div>
		</div>
	);
}

export default About;
