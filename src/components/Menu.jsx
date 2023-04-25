import style from "../Style/RouterNav.module.css"
import {Link} from "react-router-dom"
const Menu = ({menuOpen}) => {

  return (
    <div>
        <ul className={`${style.menu} ${menuOpen && `${style.menu_open}`}`}>
        <li className={style.menuParrafo}> <Link to="/">Home</Link> </li>
        <li className={style.menuParrafo}> <Link to="/home">App Dogs</Link> </li>
        <li className={style.menuParrafo}> <Link to="/add">Add Dogs</Link> </li>
        <li className={style.menuParrafo}> <Link to="/about">About</Link> </li>
            
       </ul>
    </div>
  )
}

export default Menu