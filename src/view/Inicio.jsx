import { Link } from "react-router-dom";
import style from  "../Style/Inicio.module.css"

const Inicio = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
          <h2  className={style.titleInit}>Welcome Proyect Dogs</h2>
          <p className={style.parrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, vel ipsam sint aliquid ipsa impedit voluptatibus blanditiis nihil aspernatur similique, soluta ducimus minima labore quae vero earum obcaecati nobis dolorum?</p>
          <Link to="/home"><a href="" className={style.botonInit}>Get Started ↳</a></Link>
      </div>
    </div>
  );
}

export default Inicio;
