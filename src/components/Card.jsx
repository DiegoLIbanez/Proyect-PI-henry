import { Link } from "react-router-dom"
import style from "../Style/Card.module.css"
const Card = ({id, name, life_span, weight, height, image, temperaments}) => {
  return (
    <div>
      <Link className={style.detail} to={`/detail/${id}`}>
        <div className={style.card}>
            <div className={style.cover_card}>
                <img className={style.img_card} src={image} alt="" />
            </div>
            <h2 className={style.h2}>{name}</h2> 
            <p className={style.p}>{weight}</p>
            <p className={style.p}>{temperaments}</p>
            <br />
        </div>
      </Link>
    </div>
  )
}

export default Card
