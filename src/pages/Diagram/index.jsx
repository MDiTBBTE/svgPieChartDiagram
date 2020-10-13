import React from 'react';
import { useHistory } from "react-router-dom";

import { PieChartDiagram } from '../../components/PieChartDiagram';

import './style.scss';

export const Diagram = ({sections}) => {

    const browserHistory = useHistory();

    const handleShowHome = () => browserHistory.push('/')

    return (
        <div className="wrapper">
            { sections.length === 0 ? <h1 style={{textAlign: "center"}}>Add a section to diagram on the HOME page</h1> : <PieChartDiagram sections={sections}/> }
            <button className='diagram_show-diagram-btn' onClick={handleShowHome} >show home page</button>
        </div>
    )
}
