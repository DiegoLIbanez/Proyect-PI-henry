import { useState, useEffect } from "react";
import style from "../Style/Nav.module.css"
import { getNameDogs, getAllDogs, getTemperaments } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
const Nav = () => {

const [name, setName] = useState("")

const temperament = useSelector(state => state.temperaments)
  const dispatch = useDispatch()

  const handlerSubmit = (event) => {
    event.preventDefault()
    dispatch(getNameDogs(name))
  }

  const handlerAllDogs = (event) => {
    event.preventDefault()
    dispatch(getAllDogs())
  }

  
  useEffect(() => {
    dispatch(getTemperaments())
  }, [])

  return (
    <nav className={style.nav}>
      <div className={style.menu_horizontal}>
            <select name="" id="">
              <option value="opt1">--- Select an option ---</option>
              <option value="opt1">Alphabetically(A - Z)</option>
              <option value="opt1">Alphabetically(Z - A)</option>
              <option value="opt1">Asendente</option>
              <option value="opt1">Desendente</option>
            </select>

            <select name="" id="">
              <option value="opt1">--- Select an option ---</option>
              <option value="opt1">AllGogs</option>
              <option value="opt1">Present Dogs</option>
              <option value="opt1">Created Dogs</option>
            </select>

            <select name="" id="">
              <option value="opt1">--- All temperaments ---</option>
              {temperament.map(element => {
                return(
                  <option key={element.id} value={element.id} >{element.name}</option>
                )
              })}


            </select>

            <div>
              <form className={style.menu_horizontal}>
                <input onChange={(event) => setName(event.target.value)} type="text" className={style.input} placeholder="Search"/>
                <button onClick={handlerSubmit} className={style.boton}><span className={style.span}>Search</span></button>
              </form>
            </div>
            </div>
    
    </nav>
  );
};

export default Nav;
