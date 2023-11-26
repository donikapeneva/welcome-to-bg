import React from 'react';
import './day-plan.css';
import DayItem from './DayItem.jsx';
import {plan} from '../data/plan.js';


const DayPlan = () => {
    return (
        <div className="plan-layout">
            {plan.map(item => (
                <DayItem key={item.day} {...item} />
            ))
            }
        </div>
    );
  };

export default DayPlan;