import { useState, useEffect } from "react";
import style from "../Style/Nav.module.css"
import { getNameDogs, getTemperaments,filterTemperament, orderDogs, filterDb, OrderWeigth } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";
const Nav = () => {

const [name, setName] = useState("")
const [orden, setOrden] = useState("")

const temperament = useSelector(state => state.temperaments)
  const dispatch = useDispatch()

  // Contolar Inputs
  const handlerSubmit = (event) => {
    event.preventDefault()
      dispatch(getNameDogs(name))
  }
  //Funcion para filtrar los temperamentos
  const handlerFilterTemperament = (event) => { 
    const name = event.target.value;
    dispatch(filterTemperament(name))
  }
  // funcion para ordenar a - z y z - a
  const handlerFilterOrden = (event) => { 
    const name = event.target.value;
    dispatch(orderDogs(name))
    setOrden(`Ordenando ${event.target.value}`)
  }  

  // funcion para hacer envio de los datos a la base de datos
  const handlerDb = (event) => { 
    const name = event.target.value;
    dispatch(filterDb(name))
  }

  const handlerWeigth = (event) => {
    const weigth = event.target.value;
    dispatch(OrderWeigth(weigth))

  }

  // funcion para mostrar los temperaments
  useEffect(() => {
    dispatch(getTemperaments())
  }, [])

  return (
    <>
    <nav className={style.nav}>
      <div className={style.menu_horizontal}>
            <select onChange={e => handlerFilterOrden(e)}>
              <option value="opt1">--- Select an option ---</option>
              <option value="asc">Alphabetically(A - Z)</option>
              <option value="desc">Alphabetically(Z - A)</option>
            </select>

            <select onChange={handlerWeigth}>
              <option value="">--- All Weigth ---</option>
              <option value="Maximo">All Weigth(Max)</option>
              <option value="Minimo">All Weigth(Min)</option>
            </select>

            <select onChange={handlerDb}>
              <option value="All">--- All Dogs ---</option>
              <option value="Api">Present Dogs</option>
              <option value="created">Created Dogs</option>
            </select>

            <select onChange={e => handlerFilterTemperament(e)}>
              <option value="All">--- All temperaments ---</option>
              {temperament.map(element => {
                return(
                  <option key={element.id} value={element.name}>{element.name}</option>
                )
              })}
            </select>

            <div>
              <form className={style.menu_horizontal}>
                <input onChange={(event) => setName(event.target.value)} type="text" className={style.input} placeholder="Search"/>
                <button onClick={handlerSubmit} className={style.boton}><span className={style.span}> Search</span></button>
              </form>
            </div>
            </div>
    </nav>
    <Pagination/>
    </>
  );
};

export default Nav;
