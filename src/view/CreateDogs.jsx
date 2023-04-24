import FormDog from '../components/FormDog'
import style from "../Style/Form.module.css"

const CreateDogs = () => {
  return (
    <div>
      <div className={style.popup}>
      <FormDog/>
      </div>
    </div>
  )
}

export default CreateDogs
