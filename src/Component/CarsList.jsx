import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function CarsList() {
    const [cars, setCars] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/cars')
            .then(res => setCars(res.data))
    }, [])

    return (
        <div>
            <h1>List des Voitures</h1>
            <div className=" row">
                {cars && cars.map((car) => (
                    <div className="col-md-4">
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
                                    Prix: {car.Prix}
                                </p>
                                
                            </div>
                            <div className="card-footer d-flex justify-content-around">
                                <NavLink to={"cars/" + car.id} className={"btn btn-success"}> Voir</NavLink>

                            </div>

                        </div>
                    </div>


                ))}

            </div>








        </div>
    )
}