import React from 'react';
import './Portfolio.css'
import data from '../data/data.json';

const Portfolio = ({ language }) => {

    return (
        <div>
          <ul className="cards">
                {data.PORTFOLIO.map(element => (
                    <li className="cards__item">
                    <div className="card">
                    <img src={require(`../assets/img/${element.img}`)} />
                      <div className="card__content">
                        <div className="card__title">{element[language].title}</div>
                        <p className="card__text">{element[language].description}</p>
                        <h4>Stack:</h4>
                            {element.stack.map(el => (
                                <p>{el}</p>
                            ))}
                            <div className="card__links">
                                <a href={element.code}  className="link">Code</a>
                                <a href={element.demo}  className="link">Demo</a>
                            </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
        </div>
      )
};

export default Portfolio;