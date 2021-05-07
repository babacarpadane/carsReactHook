import React from 'react';
import './Insert.css';

const insert = (props) => {
    return (
        <div>
            <p className="titleText">{props.testo}:</p>
            <input type="text" placeholder={props.testo} className="inputNewCar" />
        </div>
    );
};

export default insert;