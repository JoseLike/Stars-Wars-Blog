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
  useEffect(() => {
    actions.getOnePlanet(theid);
  }, []);



  return (
    <div className="container">
      
      <div className="d-flex row m-2">
        <Link to={"/"}>
          <div className="align-items-middle"><i class="fa-solid fa-circle-arrow-left fa-2x me-2"></i>Back</div>
        </Link>
      </div>
      <div className="row">
        <h1>{store.onecharacter.name}</h1>
      </div>
      <div className="row justify-content-between">
          <img className="col-4 foto" src={"https://starwars-visualguide.com/assets/img/characters/"+theid+".jpg"} />
          <p className="col-6">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
      <div className="row">
        <table className="table ">
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
