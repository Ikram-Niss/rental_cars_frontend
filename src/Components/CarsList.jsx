import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import RENAULT from "../assets/RENAULT.jpg"

export default function CarsList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/cars")
      .then((res) => {
        setCars(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  }, []);

  function deleteCar(id) {
    if (confirm("Voulez vous vraiment supprimer cette voiture ?")) {
      axios
        .delete("http://localhost:3000/cars/" + id)
        .then(() => alert("Voiture supprimée !"))
        .catch((err) => console.log(err));
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
        color: "#f1f1f1",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h1
        className="text-center mb-5"
        style={{ fontSize: "36px", fontWeight: "bold", color: "#ffffff" }}
      >
        🚗 Liste des Voitures
      </h1>

      <div className="d-flex justify-content-end mb-4">
        <NavLink
          to="/new-car"
          className="btn btn-primary"
          style={{
            backgroundImage: "linear-gradient(315deg, #6a11cb 0%, #2575fc 74%)",
            padding: "12px 24px",
            borderRadius: "10px",
            fontWeight: "bold",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            border: "none",
          }}
        >
          + Nouvelle Voiture
        </NavLink>
      </div>

      <div className="row">
        {cars.map((car) => (
          <div className="col-md-4 mb-4" key={car.id}>
            <div
              className="card h-100"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                backgroundColor: "#1f1f2e",
                color: "#eee",
                boxShadow: "0px 4px 15px rgba(0,0,0,0.5)",
                border: "none",
              }}
            >
              <img
                  src={'http://localhost:3000/uploads/'+car.image}
                  alt="voiture"
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <p>
                  
                </p>
              <div className="card-body">
                <h5 className="card-title fw-bold" style={{ fontSize: "20px" }}>
                  {car.matricule}
                </h5>
                <p className="card-text">Marque: {car.marque}</p>
                <p className="card-text">Model: {car.model}</p>
                <p className="card-text">Prix: {car.prix} DH</p>
                

                <div className="d-flex justify-content-between mt-4">
                 <NavLink
  to={`/cars/update/${car.id}`}
  className="btn"
  style={{
    padding: "6px 16px",
    borderRadius: "8px",
    fontWeight: "bold",
    color: "#fff",
    background: "linear-gradient(to right, #8e2de2, #4a00e0)", // بنفسجي متدرج
    boxShadow: "0px 4px 12px rgba(142, 45, 226, 0.5)",
    border: "none",
  }}
>
  Modifier
</NavLink>

<button
  onClick={() => deleteCar(car.id)}
  className="btn"
  style={{
    padding: "6px 16px",
    borderRadius: "8px",
    fontWeight: "bold",
    color: "#fff",
    background: "linear-gradient(to right, #2575fc, #6a11cb)", // أزرق مائل للبنفسجي
    boxShadow: "0px 4px 12px rgba(38, 160, 255, 0.4)",
    border: "none",
  }}
>
  Supprimer
</button>

<button
  onClick={() => reservécar(car.id)}
  className="btn"
  style={{
    padding: "6px 16px",
    borderRadius: "8px",
    fontWeight: "bold",
    color: "#fff",
    background: "linear-gradient(to right, #6a11cb, #2575fc)", // بنفسجي لأزرق
    boxShadow: "0px 4px 12px rgba(100, 115, 255, 0.4)",
    border: "none",
  }}
>
  Reservé
</button>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      

      <footer className="text-center mt-5 pt-4 border-top" style={{ color: "#ccc" }}>
        <p>&copy; {new Date().getFullYear()} - Application de location de voitures. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
