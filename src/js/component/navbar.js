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
      <div className="d-grid gap-2 d-md-block me-5">
        <button
          className="btn btn-link create-user"
          type="button"
          id="NavButtonCreateUser"
        >
          Create User
        </button>
        <button
          className="btn btn-success login-user"
          type="button"
          id="NavButtonLogin"
        >
          Login
        </button>
        <button
          className="btn btn-secondary dropdown-toggle ms-2"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {store.favourites.length} - Favourites
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {store.favourites.map((items, index) => {
            return (
              <li key={index}>
                <div className="d-flex container">
                  <a className="dropdown-item" href="#">
                    {items}
                  </a>
                  <button
                    onClick={() => {
                      actions.btn_delete(items);
                    }}
                  >
                    X
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
