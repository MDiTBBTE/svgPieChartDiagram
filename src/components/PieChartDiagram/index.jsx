import React from 'react'
import './style.scss';

export const PieChartDiagram = ({sections}) => {
    const autoRenderSections = () => {
        if(sections.length > 1) {
            let allAmount = sections.reduce( (e, x) => e + x.amount, 0);
            const sectionsWithHex = sections.map( (el, idx) => Object.assign( {}, {...el, ...{ amount: Math.round(+el.amount * 100 / allAmount)}}));
            return sectionsWithHex.map( (el, idx) => idx !== 0 ? Object.assign( {}, {...el, ...{ prevAmount: sectionsWithHex[idx-1].amount, sumPrevCur: sectionsWithHex[idx-1].amount + sectionsWithHex[idx].amount}}) : Object.assign( {}, {...el, ...{ prevAmount: 0}}));
        } 
        return sections;
    };

    return (
        <div>
            <div class="canvas">  
                <div class="legend">
                    <ul class="caption-list">
                        { sections.map( el => 
                            <li className="caption-item">
                                <span style={{backgroundColor: `${el.hexColor}`}}></span>
                                {el.name.toUpperCase()}
                            </li>
                        )}
                    </ul>
                </div>
                
                <svg class="chart" width="500" height="500" viewBox="0 0 50 50">
                    { autoRenderSections().map( (e, idx) => {
                        let curAmount = idx !== 0 && autoRenderSections()[idx].amount;
                        let amount = idx === sections.length ? 100 - curAmount : idx > 1 ? autoRenderSections()[idx-1].sumPrevCur : e.prevAmount;

                        return (
                            <circle 
                                class="unit" 
                                r="15.9" 
                                cx="50%" 
                                cy="50%" 
                                style={ sections.length === 1 ? 
                                    { stroke: `${e.hexColor}`, strokeDasharray: `100 100`} : 
                                    { stroke: `${e.hexColor}`, strokeDasharray: `${e.amount} 100`, strokeDashoffset: `-${amount}`}}>
                                <title>{e.name.toUpperCase()}</title>
                            </circle>
                    )})}
                </svg>
            </div>
        </div>
    )
}