import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Context } from "../store/appContext";
import PropTypes from 'prop-types';

export const Card = (props) => {
	const { store, actions } = useContext(Context);
	return ( <div className="card m-4" style={{ width: "18rem" }}>
		<img className="card-img-top mt-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" alt="Card image cap" />
		<div className="card-body">
			<h5 className="card-title mb-4">{props.name}</h5>
			<Link to={props.clave}>
				<a className="btn btn-outline-primary"> 
					Learn more!
				</a>
			</Link>
			<a
				className="btn-outline-warning float-end m- border border-warning ps-1 rounded pe-1"
			>
				<i className="far fa-heart"></i>
			</a>
		</div>
	</div>)
};

Card.propTypes = {
	name: PropTypes.string,
	clave: PropTypes.string,
};