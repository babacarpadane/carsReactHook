import React from 'react';
import './Car.css';

const car = (props) => {
    // const ilMioStile = {
    //   width: "60%",
    //   borderStyle: "solid",
    //   borderColor: "rgb(189, 188, 188)",
    //   margin: "10px auto",
    //   textAlign: "center",
    //   padding: "15px"
    // }

    return (
        <div className="Car">
            {/* prenderà props.pincoPalla solo nelle componenti in cui lo trova */}
            {/* style={ilMioStile} dentro il tag <p>*/}
            <p onClick={props.pincoPalla} className="datiAuto">
                Marca: {props.marca}, modello: {props.modello}, prezzo: {props.prezzo} {props.children}
            </p>
            <input type="text" className="inputNewModello" onChange={props.newModello} value={props.modello} />
        </div>
    );
};

export default car;