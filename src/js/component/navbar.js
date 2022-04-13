import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
      <div class="dropdown show me-5">
			<a
			class="btn btn-primary dropdown-toggle"
			href="#"
			role="button"
			id="dropdownMenuLink"
			data-toggle="dropdown"
			aria-haspopup="true"
			aria-expanded="false"
			>
			Favourites
			</a>
			<div class="dropdown-menu" aria-labelledby="dropdownFavourites">
			<a class="dropdown-item" href="#">
				Action
			</a>
			<a class="dropdown-item" href="#">
				Another action
			</a>
			<a class="dropdown-item" href="#">
				Something else here
			</a>
        </div>
      </div>
    </nav>
  );
};
