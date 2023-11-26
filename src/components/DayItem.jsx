import React from 'react';
import './day-item.css';
import Location from './Location';


const DayItem = ({ day, time, description, gradus, location }) => {
    return (
      <div className="day-conteiner">
        <div className="day">
            <div className="day-title subhead2-beauty">{day}</div>
            <div className="day-time body1">{time}</div>
        </div>
        {/* <img className="vector" alt="Vector" src="vector-2.svg" /> */}
        {/* <img className="vector" alt="Vector" src="/public/Vector 2.svg" /> */}
        <div className="vector-container"> 
            <svg className="vector" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 6" fill="none">
                <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM50.3333 3C50.3333 4.47276 51.5272 5.66667 53 5.66667C54.4728 5.66667 55.6667 4.47276 55.6667 3C55.6667 1.52724 54.4728 0.333333 53 0.333333C51.5272 0.333333 50.3333 1.52724 50.3333 3ZM3 3.5H53V2.5H3V3.5Z" fill="black"/>
            </svg>
        </div>
        <div className="day-description-container">
                <div className="description body1">
                    {description}
                </div>
                {gradus && 
                (
                    <div className="gradus body1">{gradus}</div>
                )}
                {location && 
                (
                    <Location href={location?.href} title={location?.title} />
                )}
                
        </div>
        {/* <div>
            
        <p className="day-description body1">{description}</p>
        </div> */}
      </div>
    );
  };

export default DayItem;