import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import style from "../Style/Home.module.css"
import RouterNav from "../components/RouterNav";
const Home = () => {

  return (
    <div>
     <header >
     <RouterNav/>
     </header>
      <div>
      <h1 className={style.titulo}>List Of Dogs</h1>
      </div>
        <Nav/>  
    </div>
  );
}

export default Home;
