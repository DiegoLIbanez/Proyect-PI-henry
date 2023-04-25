import CreateDogs from "./view/CreateDogs"
import Detail from "./view/Detail"
import Home from "./view/Home"
import {Route, Routes, useLocation} from "react-router-dom"
import Inicio from "./view/Inicio"
import RouterNav from "./components/RouterNav"
function App() {

  const {pathname} = useLocation()

  return (
    <div>
         {pathname !== "/" && <RouterNav/>}
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/add" element={<CreateDogs/>}/>
        <Route path="/home/detail/:id" element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App
