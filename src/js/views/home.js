import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../../styles/home.css";
import { Context } from "../store/appContext";

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
      <div className="container">
      <h1 className="row">Characters</h1>
      <div className="row ms-10 d-flex flex-nowrap justify-content-md-center overflow-auto">
        {store.characters.map((character) => {
          return (
              <div
                key={character.uid}
                className="card m-4"
                style={{ width: "18rem" }}
              >
                <img className="card-img-top" src="" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to={"/single/" + character.uid}>
                  <a className="btn btn-outline-primary">
                    Learn more!
                  </a>
                  </Link>
                  <a
                    className="btn-outline-warning float-end m- border border-warning ps-1 rounded pe-1"
                  >
                    <i class="far fa-heart"></i>
                  </a>
                </div>
            </div>
          );
        })}
      </div>
      </div>
      <div className="container">
      <h1 className="row mt-3">Planets</h1>
      <div className="row ms-10 d-flex flex-nowrap justify-content-md-center overflow-auto">
        {store.planets.map((planet) => {
          return (
            <div key={planet.uid} className="card m-4" style={{ width: "18rem" }}>
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-outline-primary">
                  Learn more!
                </a>
                <a
                    href="#"
                    className="btn-outline-warning float-end m- border border-warning ps-1 rounded pe-1"
                  >
                    <i class="far fa-heart"></i>
                  </a>
                </div>
            </div>
          );
        })}
      </div>
      </div>
      <div className="container">
      <h1 className="row mt-3">Vehicles</h1>
      <div className="row ms-10 d-flex flex-nowrap justify-content-md-center overflow-auto">
        {store.vehicles.map((vehicle) => {
          return (
            <div key={vehicle.uid} className="card m-4" style={{ width: "18rem" }}>
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{vehicle.name}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-outline-primary">
                  Learn more!
                </a>
                <a
                    href="#"
                    className="btn-outline-warning float-end m- border border-warning ps-1 rounded pe-1"
                  >
                    <i class="far fa-heart"></i>
                  </a>
                </div>
              </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};
