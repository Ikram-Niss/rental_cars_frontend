import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container  ">
      <h3 className="mb-4"> Home Page - Location de voitures</h3>
      
      <div className="d-flex justify-content-center flex-wrap">
        <div className="card bg-dark text-white p-5 m-3" style={{ minWidth: "250px" }}>
          <NavLink to="/cars" className="text-white text-decoration-none fw-bold">
            Liste des voitures
          </NavLink>
        </div>
        
        <div className="card bg-dark text-black p-5 m-3" style={{ minWidth: "250px" }}>
          <NavLink to="/new-car" className="text-white text-decoration-none fw-bold">
            Ajouter une voiture
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
