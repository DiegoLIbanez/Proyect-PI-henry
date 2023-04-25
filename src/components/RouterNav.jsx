import {useState,useEffect} from 'react'
import Menu from './Menu'
import style from "../Style/RouterNav.module.css"
import { Link } from 'react-router-dom'
const RouterNav = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [nav, setNav] = useState(false) 

    useEffect(() => {
        function activeNav(){
            let scrollPosition = window.pageYOffset;
            if(scrollPosition > 200){
                setNav(true)
            }else if(scrollPosition < 10){
                setNav(false)
            }
        }
        window.addEventListener("scroll", activeNav)
    }, [])
    

    const menuToggle = () => {
        setMenuOpen(!menuOpen)
    }

  return (
    <div className={`${style.navbar} ${`${style.nav}` && `${style.navbar_active}`}`}>
      <div className={style.container}>
        <Link to="/home" className={style.brand}>Dogs</Link>
        <Menu menuOpen={menuOpen}/>
        <div className={style.menu_btn}>
        <i className="fas fa-bars" onClick={menuToggle}></i>
        </div>
      </div>
    </div>
  )
}


export default RouterNav