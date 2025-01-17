import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Context } from "../store/appContext";
import PropTypes from 'prop-types';


export const Card = (props) => {
	const { store, actions } = useContext(Context);

	return ( <div className="card m-4 bg-dark text-white shadow" style={{ width: "18rem" }}>
		<img className="card-img-top mt-2" src={"https://starwars-visualguide.com/assets/img/"+(props.category)+"/"+(props.id)+".jpg"} alt="Card image cap" />
		<div className="card-body">
			<h5 className="card-title mb-4">{props.name}</h5>
			<Link to={props.clave}>
				<div className="btn btn-outline-primary"> 
					Learn more!
				</div>
			</Link>
			<a
				className="btn-outline-warning float-end m- border border-warning ps-1 rounded pe-1" onClick={props.fav}
			>
				<i className="far fa-heart"></i>
			</a>
		</div>
	</div>)
};

Card.propTypes = {
	category: PropTypes.string,
	id: PropTypes.string,
	name: PropTypes.string,
	clave: PropTypes.string,
	fav: PropTypes.func
};