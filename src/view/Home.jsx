import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Pagination from "../components/Pagination";
import style from "../Style/Home.module.css"
const Home = () => {

  return (
    <div>
      <div>
      <h1 className={style.titulo}>welcome</h1>
      <div className={style.btn_agregar}>
        <form action="" className={style.menu_horizontal}>
                  <Link to={"/add"}><button className={style.boton}><span className={style.span}>Add</span></button></Link>
                </form>
        </div>
      </div>
        <Nav/>  
        <Pagination/>
    </div>
  );
}

export default Home;
