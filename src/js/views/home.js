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
        <h1 className="row">{store.characters.length} Characters</h1>
        <div className="row ms-10 d-flex flex-nowrap justify-content-start overflow-auto">
          {store.characters.map((character) => {
            return (
              <Card
                key={character.uid}
                id={character.uid}
                category="characters"
                name={character.name}
                clave={"/single/" + character.uid}
                fav={() => {
                  actions.addToFavs(character.name);
                }}
              />
            );
          })}<button  style={{ width: "18rem" }}  type="button" className="btn btn-secondary" onClick={actions.getMoreCharacters}>
          Load more characters
        </button>
        </div>
        
      </div>
      <div className="container">
        <h1 className="row mt-3">{store.planets.length} Planets</h1>
        <div className="row ms-10 d-flex flex-nowrap justify-content-start overflow-auto">
          {store.planets.map((planet) => {
            return (
              <Card
                key={planet.uid}
                name={planet.name}
                clave={"/planet/" + planet.uid}
              />
            );
          })}<button  style={{ width: "18rem" }}  type="button" className="btn btn-secondary" onClick={actions.getMorePlanets}>
          Load more planets
        </button>
        </div>
      </div>
      <div className="container">
        <h1 className="row mt-3">{store.vehicles.length} Vehicles</h1>
        <div className="row ms-10 d-flex flex-nowrap justify-content-start overflow-auto">
          {store.vehicles.map((vehicle) => {
            return (
              <Card
                key={vehicle.uid}
                name={vehicle.name}
                clave={"/starship/" + vehicle.uid}
              />
            );
          })}<button  style={{ width: "18rem" }}  type="button" className="btn btn-secondary" onClick={actions.getMoreVehicles} >
          Load more vehicles
        </button>
        </div>
      </div>
    </div>
  );
};
