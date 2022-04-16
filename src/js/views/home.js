import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "/workspace/Stars-Wars-Blog/src/js/component/card.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCharacters();
  }, []);
  useEffect(() => {
    actions.getPlanets();
  }, []);
  useEffect(() => {
    actions.getVehicles();
  }, []);

  return (
    <div>
      <div className="container mt-4">
      <h1 className="row">Characters</h1>
      <div className="row ms-10 d-flex flex-nowrap justify-content-start overflow-auto">
        {store.characters.map((character) => {
          return (
            <Card key={character.uid} name={character.name} clave={"/single/" + character.uid} />
          );
        })}
      </div>
      </div>
      <div className="container">
      <h1 className="row mt-3">Planets</h1>
      <div className="row ms-10 d-flex flex-nowrap justify-content-start overflow-auto">
        {store.planets.map((planet) => {
          return (
            <Card key={planet.uid} name={planet.name} clave={"/single/" + planet.uid} />
          );
        })}
      </div>
      </div>
      <div className="container">
      <h1 className="row mt-3">Vehicles</h1>
      <div className="row ms-10 d-flex flex-nowrap justify-content-start overflow-auto">
        {store.vehicles.map((vehicle) => {
          return (
            <Card key={vehicle.uid} name={vehicle.name} clave={"/single/" + vehicle.uid} />
          );
        })}
      </div>
    </div>
    </div>
  );
};
