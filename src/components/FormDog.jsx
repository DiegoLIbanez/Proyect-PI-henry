import { useState, useEffect } from "react"
import style from  "../Style/Form.module.css"
import {useSelector, useDispatch} from "react-redux"
import { createDogs, getTemperaments } from "../redux/action"
import {useNavigate} from "react-router-dom"

const FormDog = () => {

  const [input, setInput] = useState({
    name:"",
    life_span:"", 
    weight: "",
    height:"", 
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
  }

  const handlerSelect = (e) => { 
    setInput({
    ...input,
    temperament: [...input.temperament, e.target.value]
        
    })
  }

  const handlerSubmit = (e) => { 
    e.preventDefault()
    dispatch(createDogs(input))
    console.log(input)
    alert("dogs creado")
    navigate("/")

  }


  useEffect(() => {
    dispatch(getTemperaments())
  }, [])

  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <div className={style.note}>
        <label className={style.title}>Add Dogs</label>
      </div>
      <input placeholder="Name Dogs..." onChange={handleChange}  name="name" type="text" className={style.input_field}/>
      <input placeholder="life span..." onChange={handleChange} name="life_span" type="text" className={style.input_field}/>
      <input placeholder="weight..." onChange={handleChange} name="weight" type="text" className={style.input_field}/>
      <input placeholder="height..." onChange={handleChange} name="height" type="text" className={style.input_field}/>
      <input placeholder="image..." onChange={handleChange} name="image" type="text" className={style.input_field}/>

      <select className={style.option} onChange={handlerSelect}>
        {temperaments.map((element) =>  {
          return <option className={style.select} key={element.id} value={element.name}>{element.name}</option>
        })}
      </select>
        <p>{input.temperament.map(elem => elem + ", ")}</p>
      <button className={style.submit}>Submit</button>
  </form>
  )
}

export default FormDog