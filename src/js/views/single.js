import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container">
			<div className="row">
				<img className="foto"/>
				<p></p>
			</div>
			<div className="row"></div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
