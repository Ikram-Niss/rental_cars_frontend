import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

export default function UpdateCar() {
    const [car, setCar] = useState({
        matricule: '',
        marque: '',
        model: '',
        prix: ''
    })
    const [matricule, setMatricule] = useState('')
    const [marque, setMarque]=useState('')
    const [model,setModel]=useState('')
    const [prix, setPrix] = useState('')
    const { id } = useParams()

    useEffect(() => {
        axios.get('http://localhost:3000/cars/' + id)
            .then(res => {
                setCar(res.data)
                setMatricule(res.data.matricule)
                setMarque(res.data.marque)
                setModel(res.data.model)
                setPrix(res.data.prix)

            })
            .catch(err => console.log(err))
    }, [])



    // function UpdateCar(id) {
    //     if (confirm("Voulez vous modifier cette voiture ?")) {
    //         axios.UpdateCar("http://localhost:3000/cars/" + id)
    //             .then(res => alert("the car was updated !"))
    //             .catch(err => console.log(err))
    //     }
    // }

    const handeleSubmit  = (e) => {
        e.preventDefault();
    axios.put("http://localhost:3000/cars/"+id, { matricule, marque, model, prix, }).then(() => {
      alert("vous avez modifier une voiture")
      navigate("/cars")
    })
    }
    return (
        <div>
            <h1>Modifier la voiture N° {id}</h1>
            {car && (
                <div className="container mt-5">
                    <div className="card shadow-sm">
                        <div className="card-header bg-light text-center">
                            <h3> New Car</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handeleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="matricule" className="form-label">matricule:</label>
                                    <input type="text" id="matricule" className="form-control" placeholder="matricule du voiture" value={matricule} onChange={(e) => setMatricule(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="marque" className="form-label">marque:</label>
                                    <input type="text" id="marque" className="form-control" placeholder="marque de voiture" value={marque} onChange={(e) => setMarque(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="model" className="form-label">model:</label>
                                    <input type="text" id="model" className="form-control" placeholder=" " value={model} onChange={(e) => setModel(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="prix" className="form-label">Prix:</label>
                                    <input type="number" id="prix" className="form-control" placeholder="Prix en DH" value={prix} onChange={(e) => setPrix(e.target.value)} />
                                </div>
                                <div className="text-end">
                                    <button type="submit" className="btn btn-primary">modifier</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            )}

        </div>
    )
}
