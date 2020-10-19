import React from 'react';
import './Portfolio.css'
import data from '../data/data.json';

const Portfolio = ({ language }) => {

    return (
        <div>
            <div className="row">
                {data.PORTFOLIO.map(element => (
                    <div className="card">
                        <img src={require(`../assets/img/${element.img}`)} />
                        <div className="container">
                            <h3><b>{element[language].title}</b></h3>
                            <p>{element[language].description}</p>
                            <h4>Stack:</h4>
                            {element.stack.map(el => (
                                <div className="badge">{el}</div>
                            ))}
                            <a className="btn-code" href={element.code} target="_blank">Code</a>
                            <a className="btn-demo" href={element.demo} target="_blank">Demo</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Portfolio;