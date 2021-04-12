import React from 'react';
import './Car.css';

const car = (props) => {
    return (
        <div className="Car">
            {/* prenderà props.pincoPalla solo nelle componenti in cui lo trova */}
            <p onClick={props.pincoPalla}>
                Marca: {props.marca}, modello: {props.modello}, prezzo: {props.prezzo} {props.children}
            </p>
            <input type="text" className="inputNewModello" onChange={props.newModello} value={props.modello} />
        </div>
    );
};

export default car;