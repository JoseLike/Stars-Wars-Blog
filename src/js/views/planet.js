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
        <img className="foto" />
        <p></p>
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
