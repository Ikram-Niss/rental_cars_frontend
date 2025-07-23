import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import NewCar from "./Component/NewCar"
import CarsList from "./Component/CarsList"
import UpdateCar from "./Component/UpdateCar"
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"
import "./App.css";




function App() {

  return(
    <div>
      <Navbar/>
    
        <h1 className=" text-warning text-center ">Voitures App</h1>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cars" element={<CarsList/> }/>
          <Route path="/new-Car" element={<NewCar/>}/>
          <Route path="/cars/update/:id" element={<UpdateCar/>}/>
          
        </Routes>
        


      <Footer/>


    </div>
  )
  
}

export default App
