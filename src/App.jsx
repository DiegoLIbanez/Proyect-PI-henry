import CreateDogs from "./view/CreateDogs"
import Detail from "./view/Detail"
import Home from "./view/Home"
import {Route, Routes, useLocation} from "react-router-dom"
import Inicio from "./view/Inicio"
import RouterNav from "./components/RouterNav"
import axios from "axios"
function App() {
 
  const {pathname} = useLocation()

  const verificarRuta = () => {

    switch (pathname) {
      case "/": return false
      case "/home": return true
      case "/detail/:id": return false
      case "/add": return true
      default: return false;
    }
  }

  return (
    <div>
         {verificarRuta() && <RouterNav/>}

      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/add" element={<CreateDogs/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App
