import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const CreateUser = () => {
  const { store, actions } = useContext(Context);

  const [datos, setDatos] = useState({
    nick:"",
    nombre:"",
    email:"",
    password:""
  })

  const handleInputChange = (event)=>{
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }

  const sendNewUser=()=>{
    actions.handleNewUser(datos);
  }

  return (
    <div className="container bg-light mt-5 mb-3 p-3 border border-warning rounded">
      <h1>I'm noob sorry</h1>
      <div className="d-flex flex-row align-items-center mb-4">
        <i class="fas fa-user-circle me-3 fa-fw"></i>
        <div className="form-outline flex-fill mb-0">
          <input type="text" id="form3Example1c" className="form-control" placeholder="Enter Nick" onChange={handleInputChange} name="nick"/>
        </div>
      </div>
      <div className="d-flex flex-row align-items-center mb-4">
        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
        <div className="form-outline flex-fill mb-0">
          <input type="text" id="form3Example1c" className="form-control" placeholder="Enter Name" onChange={handleInputChange} name="nombre"/>
        </div>
      </div>
      <div class="d-flex flex-row align-items-center mb-4">
        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
        <div class="form-outline flex-fill mb-0">
          <input type="email" id="form3Example3c" class="form-control" placeholder="Enter email" onChange={handleInputChange} name="email"/>
        </div>
      </div>
      <div class="d-flex flex-row align-items-center mb-4">
        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
        <div class="form-outline flex-fill mb-0">
          <input type="password" id="form3Example4c" class="form-control" placeholder="Enter Password" onChange={handleInputChange} name="password"/>
        </div>
      </div>
      <div className="row justify-content-center">
        <button type="button" class="col-3 btn btn-outline-success" onClick={()=>sendNewUser()}>Success</button>
      </div>
    </div>
  );
};
