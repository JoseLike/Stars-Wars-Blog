import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = () => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  useEffect(() => {
    actions.getOnePlanet(theid);
   }, []);


  return (
    <div className="container">
      <div className="row">
		  <h1>{store.oneplanet.name}</h1>
      </div>
      <div className="row justify-content-between">
          <img className="col-4 foto" src="https://www.get-digital.es/web/getdigital/gfx/products/__generated__resized/1100x1100/19805SW_logo_licht_main.jpg" />
          <p className="col-6">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">height</th>
              <th scope="col">mass</th>
              <th scope="col">Hair color</th>
              <th scope="col">skin_color</th>
			  <th scope="col">eye_color</th>
			  <th scope="col">birth_year</th>
			  <th scope="col">gender</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{store.oneplanet.diameter}</th>
              <td>{store.oneplanet.rotation_period}</td>
              <td>{store.oneplanet.orbital_period}</td>
              <td>{store.oneplanet.gravity}</td>
			  <td>{store.oneplanet.population}</td>
			  <td>{store.oneplanet.climate}</td>
			  <td>{store.oneplanet.terrain}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
