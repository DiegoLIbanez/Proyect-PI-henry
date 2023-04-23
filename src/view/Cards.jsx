import style from "../Style/Cards.module.css"
import Card from "../components/Card"

const Cards = ({dogs}) => {


  return (
    <div className={style.container__cards}>
    {dogs?.length ? (
      dogs?.map(element =>  {
        return <Card 
          key={element.id} 
          id={element.id} 
          name={element.name} 
          life_span={element.life_span} 
          weight={element.weight} 
          height={element.height}
          image={element.image}
          temperaments={element.temperaments}/>
          
       })
    ): <div className={style.loader}>
        <div className={style.wrapper}>
          <div className={style.circle}></div>
          <div className={style.line_1}></div>
          <div className={style.line_2}></div>
          <div className={style.line_3}></div>
          <div className={style.line_4}></div>
        </div>
      </div>}
    </div>
  )
}

export default Cards


