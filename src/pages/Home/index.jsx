import React, { useState } from 'react';

import { useHistory } from "react-router-dom";
import './style.scss';

export const Home = ({handleAddSection}) => {
    const browserHistory = useHistory();
    const handleShowDiagram = () => browserHistory.push('/diagram');

    const [ field, setField ] = useState({name: '', amount: ''});

    const handleChangeSection = el => {
        let e = el.getAttribute('name');
        setField({...field, [e]: el.value});
    }

    const handleClick = () => { 
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        handleAddSection(field.name, +field.amount, randomColor);
        setField({name: '', amount: ''})
    };

    return (
        <div className='home'>
            <h1 className='home_title'>Home page from here you can add sections to the diagram</h1>
            <div className="home_field-wrapper">
                <div className="home_inputs-wrapper">
                    <input 
                        className='home_input' 
                        type="text" 
                        placeholder='Add smth to the diagram...' 
                        name='name'
                        value={field.name} 
                        onChange={ e => handleChangeSection(e.target)}
                    />
                    <input 
                        className='home_input' 
                        type="text" 
                        placeholder='Write amount' 
                        name='amount'
                        value={field.amount} 
                        onChange={ e => handleChangeSection(e.target)}
                    />
                </div>
                <button className="home_btn" onClick={handleClick}>Add section</button>
            </div>
            <button className='home_show-home-btn' onClick={handleShowDiagram}>show diagram</button>
        </div>
    )
}
