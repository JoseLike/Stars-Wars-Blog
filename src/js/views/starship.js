import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Starship = () => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

   useEffect(() => {
    actions.getOneStarship(theid);
   }, []);

  return (
    <div className="container">
      <div className="row">
		  <h1>{store.onestarship.model}</h1>
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
              <th scope="row">{store.onestarship.starship_class}</th>
              <td>{store.onestarship.manufacturer}</td>
              <td>{store.onestarship.cost_in_credits}</td>
              <td>{store.onestarship.length}</td>
			  <td>{store.onestarship.crew}</td>
			  <td>{store.onestarship.passengers}</td>
			  <td>{store.onestarship.max_atmosphering_speed}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
