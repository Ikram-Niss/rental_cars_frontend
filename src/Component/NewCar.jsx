import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function NewCar(){
    const[matricule,setMatricule] =useState("")
    const[marque,setMarque] =useState("")
    const[model,setModel] =useState("")
    const[prix,setPrix] =useState("")
    

    const navigate = useNavigate()

    function handeleSubmit (e) {
         e.preventDefault();
         axios.post("http://localhost:3000/cars",{matricule,marque,model,prix,}).then(()=>{
            alert("vous avez ajouter une voitures")
            navigate("/CARS")
         })
    }






    return (
        <div className="container mt-5">
  <div className="card shadow-sm">
    <div className="card-header bg-light text-center">
      <h3> New Car</h3>
    </div>
    <div className="card-body">
      <form onSubmit={handeleSubmit}> 
        <div className="mb-3">
          <label htmlFor="titre" className="form-label">matricule:</label>
          <input type="text" id="titre" className="form-control" placeholder="Titre du livre"  value={matricule} onChange={(e)=>setMatricule(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="auteur" className="form-label">marque:</label>
          <input type="text" id="auteur" className="form-control" placeholder="Nom de l'auteur" value={marque} onChange={(e) => setMarque(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="categorie" className="form-label">model:</label>
          <input type="text" id="categorie" className="form-control" placeholder="Ex: Roman, Science" value={model} onChange={(e) => setModel(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="prix" className="form-label">Prix:</label>
          <input type="number" id="prix" className="form-control" placeholder="Prix en DH" value={prix} onChange={(e) => setPrix(e.target.value)}/>
        </div>
        <div className="text-end">
          <button type="submit" className="btn btn-primary">Ajouter</button>
        </div>
      </form>
    </div>
  </div>
</div>

    )
}