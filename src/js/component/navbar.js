import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { StaticRouter } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand ps-5" href="#">
        <img
          src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png"
          width="65"
          height="45"
          alt=""
        />
      </a>
      <div className="dropdown me-5">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favourites 
            {store.favourites.length}

        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {store.favourites.map((items, index) => {
            return (
              <li key={index}>
                <div className="d-flex container">
                  <a className="dropdown-item" href="#">
                    {items}
                  </a>
                  <button>X</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
