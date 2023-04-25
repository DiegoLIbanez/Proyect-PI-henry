import { useEffect } from "react";
import { datailDogs, deleteDog, cleanDetail } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import style from "../Style/Detail.module.css";

const Detail = () => {
  const detailDogs = useSelector((state) => state.detailDogs);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(deleteDog(id));
    alert("Dog deleted");
    navigate("/");
  };

  useEffect(() => {
    dispatch(cleanDetail([]));
    dispatch(datailDogs(id));
  }, []);

  return (
    <div className={style.container__cards}>
      <Link to="/home">
        <button className={style.botonBack}>↲ GoBack</button>
      </Link>
      {detailDogs.length ? (
        detailDogs?.map((element) => {
          return (
            <div key={element.id}>
              <h1 className={style.name}>{element.name}</h1>
              <div className={style.detailcard}>
                <div>
                  <img
                    className={style.image}
                    src={element.image}
                    alt={element.name}
                  />
                </div>
                <div className={style.info}>
                  <h4>Temperaments</h4>
                  <p className={style.p}>{element.temperaments}</p>
                  <h4>Life Span</h4>
                  <p className={style.p}>{element.life_span}</p>
                  <h4>Weight</h4>
                  <p className={style.p}>{element.weight}</p>
                  <h4>Heigth</h4>
                  <p className={style.p}>{element.height}</p>
                  {element.createdInDb ? (
                    <button className={style.boton} onClick={handleClick}>
                      Delete
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className={style.loader}>
          <div className={style.wrapper}>
            <div className={style.circle}></div>
            <div className={style.line_1}></div>
            <div className={style.line_2}></div>
            <div className={style.line_3}></div>
            <div className={style.line_4}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
