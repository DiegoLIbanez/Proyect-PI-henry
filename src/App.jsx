import CreateDogs from "./view/CreateDogs"
import Detail from "./view/Detail"
import Home from "./view/Home"
import {Route, Routes} from "react-router-dom"
function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<CreateDogs/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App
