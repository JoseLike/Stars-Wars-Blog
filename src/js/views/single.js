import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

   useEffect(() => {
   actions.getOneCharacter(theid);
  }, []);

  return (
    <div className="container">
      <div className="row">
		  <h1>{store.onecharacter.name}</h1>
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
              <th scope="row">{store.onecharacter.height}</th>
              <td>{store.onecharacter.mass}</td>
              <td>{store.onecharacter.hair_color}</td>
              <td>{store.onecharacter.skin_color}</td>
			  <td>{store.onecharacter.eye_color}</td>
			  <td>{store.onecharacter.birth_year}</td>
			  <td>{store.onecharacter.gender}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
