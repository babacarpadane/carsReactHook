import React, { useState } from 'react';
import Car from './Car/Car';
import './App.css';

const car = () => {
  const [currentState, functionToSetState] = useState({ //questa è una funzione
    cars: [
      { marca: "BMW", modello: "M4", prezzo: 160000 },
      { marca: "Mercedes", modello: "SLS AMG", prezzo: 180000 },
      { marca: "Audi", modello: "RS7", prezzo: 110000 },
      { marca: "Subaru", modello: "BRZ", prezzo: 94000 },
      { marca: "Chevrolet", modello: "Corvette", prezzo: 195000 },
      { marca: "Maserati", modello: "Ghibli", prezzo: 99500 }
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
        { marca: newMarca, modello: newModello, prezzo: newPrezzo },
        { marca: "Subaru", modello: "BRZ", prezzo: 94000 },
        { marca: "Chevrolet", modello: "Corvette", prezzo: 195000 },
        { marca: "Maserati", modello: "Ghibli", prezzo: 99500 }
      ]
      //testo: currentState.testo ho chiamato usestate 2 volte, non è + necessario
    })
  };

  const nuovoModelloInseritoHandler = (event) => {
    functionToSetState({
      cars: [
        { marca: "BMW", modello: "M4", prezzo: 160000 },
        { marca: "Mercedes", modello: event.target.value, prezzo: 180000 },
        { marca: "Audi", modello: "RS7", prezzo: 110000 },
        { marca: "Subaru", modello: "BRZ", prezzo: 94000 },
        { marca: "Chevrolet", modello: "Corvette", prezzo: 195000 },
        { marca: "Maserati", modello: "Ghibli", prezzo: 99500 }
      ]
    })
  };

  return (
    <div className="webApp">
      <h1> Concessionario AUTO </h1>
      <p className="info"> Listino modelli e prezzi </p>
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
      <Car
        marca={currentState.cars[3].marca}
        modello={currentState.cars[3].modello}
        prezzo={currentState.cars[3].prezzo}
      >€</Car>
      <Car
        marca={currentState.cars[4].marca}
        modello={currentState.cars[4].modello}
        prezzo={currentState.cars[4].prezzo}
      >€</Car>
      <Car
        marca={currentState.cars[5].marca}
        modello={currentState.cars[5].modello}
        prezzo={currentState.cars[5].prezzo}
      >€</Car>
      <p className="info"> {secondCurrentState.testo} </p>
      <button className="bottoneClicca"
        onClick={() => haiCliccatoHandler("Porsche", "911Turbo", 115000)}
      >Mostra Porsche</button>
    </div>
    //OPPURE onClick={haiCliccatoHandler.bind(this, "Porsche", "911Turbo", 115000)}
  );
}

export default car;
