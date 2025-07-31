import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import NewCar from "./Components/NewCar"
import CarsList from "./Components/CarsList"
import UpdateCar from "./Components/UpdateCar"
import Footer from "./Components/Footer"
import { useEffect, useState } from "react"
import Background from "./Components/Background.jsx";
import Hero from "./Components/Hero.jsx"
import Navbar from "./Components/Navbar.jsx"
import LoginForm from "./Components/LoginForm.jsx"

function App() {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" }
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=> {
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 3000);
  },[])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/cars" element={<CarsList />} />
        <Route path="/new-car" element={<NewCar />} />
        <Route path="/cars/update/:id" element={<UpdateCar />} />
        
        

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
