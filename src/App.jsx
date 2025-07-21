import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import NewCar from "./Component/NewCar"


function App() {

  return(
    <div>
        <h1 className=" text-warning text-center ">Voitures App</h1>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cars" element={<CarsList/> }/>
          <Route path="/new-Car" element={<NewCar/>}/>

        </Routes>

    </div>
  )
  
}

export default App
