import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function CarsList() {
    const [cars, setCars] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/cars')
            .then(res => setCars(res.data))
            .catch(err => console.log(err))
    }, [])


    function deleteCar(id) {
        if (confirm("Voulez vous vraiment supprimer cette voiture ?")) {
            axios.delete("http://localhost:3000/cars/" + id)
                .then(res => alert("voiture est supprimé !"))
                .catch(err => console.log(err))
        }
    }
    return (
        <div>
            <h1>List des Voitures</h1>
            <div className=" row">
                {cars && cars.map((car) => (
                    <div className="col-md-4" key={car.id}>
                        <div className="card">
                            <div className="card-header">
                                <h6> {car.matricule} </h6>
                            </div>
                            <div className="card-body">
                                <p className="lead">
                                    marque: {car.marque}
                                </p>
                            </div>
                            <div className="card-body">
                                <p className="lead">
                                    model: {car.model}
                                </p>

                            </div>
                            <div className="card-body">
                                <p className="lead">
                                    Prix: {car.prix} DH
                                </p>

                            </div>


                            <div className="d-flex p-2 justify-content-between">
                                <NavLink to={"/cars/update/"+car.id} className="btn btn-outline-primary">
                                    Modifier
                                </NavLink>
                                <button className="btn btn-danger" onClick={() => deleteCar(car.id)}>
                                    Supprimer
                                </button>
                            </div>
                        </div>
                    </div>


                ))}

            </div>

        </div>
    )
}