import React, {useContext, useEffect} from "react";
import "../../styles/home.css";
import {Context} from "../store/appContext";

export const Home = () => {
  const {store,actions} = useContext(Context);

  useEffect(()=>{
    actions.getCharacters()
  },[]);
  useEffect(()=>{
    actions.getPlanets()
  },[]);
  useEffect(()=>{
    actions.getVehicles()
  },[]);


  return(
    <div>
      <h1>Characters</h1>
      <div className="flex-row d-flex flex-nowrap">
        {store.characters.map((character)=>{
          return <div key={character.uid} className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src="" alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-outline-primary">Learn more!</a>
            <a href="#" className="btn-outline-warning float-end m-">Learn more!</a>
          </div>
        </div>})}
      </div>
      <h1>Planets</h1>
      <div className="flex-row d-flex flex-nowrap">
      {store.planets.map((planet)=>{
        return <div key={planet.uid} className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src="..." alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{planet.name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-outline-primary">Learn more!</a>
        </div>
      </div>})}
      </div>
      <h1>Vehicles</h1>
      <div className="flex-row d-flex flex-nowrap">
      {store.vehicles.map((vehicle)=>{
        return <div key={vehicle.uid} className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src="..." alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{vehicle.name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-outline-primary">Learn more!</a>
        </div>
      </div>})}
      </div>
    </div>
  )

  };
