import { useState, useEffect } from "react"
import style from  "../Style/Form.module.css"
import {useSelector, useDispatch} from "react-redux"
import { createDogs, getTemperaments } from "../redux/action"
import {Link, useNavigate} from "react-router-dom"
import { validate, verificarCampos } from "../utils/validate"
const FormDog = () => {


  const [input, setInput] = useState({
    name:"",
    life_span:"", 
    weightMax: "",
    weightMin: "",
    heightMax:"", 
    heightMin:"", 
    image: "",
    temperament: []
  })

  const [error, setError] = useState({
    name:"",
    life_span:"", 
    weightMax: "",
    weightMin: "",
    heightMax:"", 
    heightMin:"", 
    image: "",
    temperament: []
   })

  const navigate = useNavigate()

  const temperaments = useSelector(state => state.temperaments)
  const dispatch = useDispatch()

  const handleChange = (e) => { 
    setInput({
      ...input,
        [e.target.name]: e.target.value
    })
    setError(
      validate({
        ...input,
          [e.target.name]: e.target.value}, error)
    )
  }

  const handlerSelect = (e) => { 
      if(!input.temperament.includes(e.target.value)){
        setInput({
          ...input,
          temperament: [...input.temperament, e.target.value]
        })
      }
    }     

  const handlerSubmit = (e) => { 
    e.preventDefault()

    if (!verificarCampos(input)) {
			alert('Completa los campos');
      return
		}

    const Dogs = {
      name: input.name,
      life_span: input.life_span,
      weight: `${input.weightMin} - ${input.weightMax}`,
      height: `${input.heightMin} - ${input.heightMax}`,
      image: input.image,
      temperament: input.temperament
    }
    dispatch(createDogs(Dogs))
    alert("dogs creado")
    navigate("/home")

  }


  useEffect(() => {
    dispatch(getTemperaments())
  }, [])

  return (
  <>
  <Link to="/home"><button className={style.botonForm}>↲ GoBack</button></Link>
  <form className={style.form} onSubmit={handlerSubmit}>
      <div className={style.note}>
        <label className={style.title}>Add Dogs</label>
      </div>
      <input placeholder="Name Dogs..." onChange={handleChange}  name="name" type="text" className={style.input_field}/>
      <span className={style.span}>{error.name}</span>
      <input placeholder="life span..." onChange={handleChange} name="life_span" type="text" className={style.input_field}/>
      <span className={style.span}>{error.life_span}</span>
      <input placeholder="weight Min..." onChange={handleChange} name="weightMin" type="text" className={style.input_field}/>
      <span className={style.span}>{error.weightMin}</span>
      <input placeholder="weight Max..." onChange={handleChange} name="weightMax" type="text" className={style.input_field}/>
      <span className={style.span}>{error.weightMax}</span>
      <input placeholder="height Min..." onChange={handleChange} name="heightMin" type="text" className={style.input_field}/>
      <span className={style.span}>{error.heightMin}</span>
      <input placeholder="height Max..." onChange={handleChange} name="heightMax" type="text" className={style.input_field}/>
      <span className={style.span}>{error.heightMax}</span>
      <input placeholder="image..." onChange={handleChange} name="image" type="text" className={style.input_field}/>
      <span className={style.span}>{error.image}</span>

      <select className={style.option} onChange={handlerSelect}>
        {temperaments.map((element) =>  {
          return <option className={style.select} key={element.id} value={element.name}>{element.name}</option>
        })}
      </select>
        <p>{input.temperament.map(elem => elem + ", ")}</p>
      <button className={style.submit}>Submit</button>
  </form>
  </>
  )
}

export default FormDog