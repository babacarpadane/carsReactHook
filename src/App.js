import React, { useState } from 'react';
import Car from './Car/Car';
import Insert from './InsertNewCars/Insert';
import './App.css';

const car = () => {
  const [carList, setCarList] = useState(
    [
      { id: 1, marca: "BMW", modello: "M4", prezzo: 160000 },
      { id: 2, marca: "Subaru", modello: "BRZ", prezzo: 94000 },
      { id: 3, marca: "Chevrolet", modello: "Corvette", prezzo: 195000 },
      { id: 4, marca: "Audi", modello: "RS7", prezzo: 110000 },
      { id: 5, marca: "Maserati", modello: "Ghibli", prezzo: 99500 }
    ]
  );

  const addCar = (newBrand, newModel, newPrice) => {
    let temporaryList = carList.slice();
    temporaryList.push({
      id: temporaryList[temporaryList.lenght - 1] + 1,
      marca: newBrand, modello: newModel, prezzo: newPrice
    });
    setCarList(temporaryList);
  };

  return (
    <div className="webApp">
      <h1> Concessionario AUTO </h1>
      <p className="info"> Inserisci nuova auto </p>
      <div className="hightForm">
        <Insert testo={"Marca"} />
        <Insert testo={"Modello"} />
        <Insert testo={"Prezzo"} />
        <button className="bottoneClicca"
          onClick={() => addCar() /*aggiungere parametri*/}
        >Inserisci auto</button>
      </div>
      <p className="info"> Listino modelli e prezzi </p>
      {
        carList.map(car => {
          if (car.marca != null && car.modello != null && car.prezzo != null) {
            return (
              <Car key={car.id} marca={car.marca} modello={car.modello} prezzo={car.prezzo}>€</Car>
            )
          }
        })
      }
    </div>
  );
}

export default car;
