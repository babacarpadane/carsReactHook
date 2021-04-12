import React, { useState } from 'react';
import Car from './Car/Car';
import './App.css';

const car = () => {
  const [currentState, functionToSetState] = useState({ //questa è una funzione
    cars: [
      { marca: "BMW", modello: "M4", prezzo: 160000 },
      { marca: "Mercedes", modello: "SLS AMG", prezzo: 180000 },
      { marca: "Audi", modello: "RS7", prezzo: 110000 }
    ]
  });

  const [secondCurrentState, secondfunctionToSetState] = useState({
    testo: "Nuovi veicoli in arrivo a breve"
  });

  const haiCliccatoHandler = (newMarca, newModello, newPrezzo) => {
    functionToSetState({
      cars: [
        { marca: "BMW", modello: "M4", prezzo: 160000 },
        { marca: "Mercedes", modello: "SLS AMG", prezzo: 180000 },
        { marca: newMarca, modello: newModello, prezzo: newPrezzo }
      ]
      //testo: currentState.testo ho chiamato usestate 2 volte, non è + necessario
    })
  };

  const nuovoModelloInseritoHandler = (event) => {
    functionToSetState({
      cars: [
        { marca: "BMW", modello: "M4", prezzo: 160000 },
        { marca: "Mercedes", modello: event.target.value, prezzo: 180000 },
        { marca: "Audi", modello: "RS7", prezzo: 110000 }
      ]
    })
  };

  // const ilMioStile = {
  //   width: "60%",
  //   borderStyle: "solid",
  //   borderColor: "rgb(189, 188, 188)",
  //   margin: "10px auto",
  //   textAlign: "center",
  //   padding: "15px"
  // }

  return (
    <div className="webApp">
      <h1> Bonfanti AUTO </h1>
      <p> Listino modelli e prezzi </p>
      {/* style={ilMioStile} */}
      <Car
        pincoPalla={haiCliccatoHandler.bind(this, "Nissan", "GTR", 90000)}
        marca={currentState.cars[0].marca}
        modello={currentState.cars[0].modello}
        prezzo={currentState.cars[0].prezzo}
      >€</Car>
      <Car
        newModello={nuovoModelloInseritoHandler}
        marca={currentState.cars[1].marca}
        modello={currentState.cars[1].modello}
        prezzo={currentState.cars[1].prezzo}
      >€</Car>
      <Car
        pincoPalla={haiCliccatoHandler.bind(this, "Koennisegg", "ONE", 2000000)}
        marca={currentState.cars[2].marca}
        modello={currentState.cars[2].modello}
        prezzo={currentState.cars[2].prezzo}
      >€</Car>
      <p> {secondCurrentState.testo} </p>
      <button className="bottoneClicca"
        onClick={() => haiCliccatoHandler("Porsche", "911Turbo", 115000)}
      >Mostra Porsche</button>
    </div>
    //OPPURE onClick={haiCliccatoHandler.bind(this, "Porsche", "911Turbo", 115000)}
  );
}

export default car;
