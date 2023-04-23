import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../view/Cards";
import NumberPagination from "./NumberPagination";
import "../Style/Pagination.module.css"
import { getAllDogs } from "../redux/action";
import { useDispatch, useSelector } from "react-redux"

const Pagination = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(6);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const dispatch = useDispatch();
  const data  = useSelector((state) => state.allDogs);

  useEffect(() => {
    dispatch(getAllDogs());
  }, []);


  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / totalPages); i++) {
    pages.push(i);
  }

  const handleClick = (event) => {
    setPage(Number(event.target.id));
  };

  const indexOfLastItem = page * totalPages;
  const indexOfFirsItem = indexOfLastItem - totalPages;
  const currentItems = data.slice(indexOfFirsItem, indexOfLastItem);

  const handlerNextBtn = () => {
    setPage(page + 1);
    if(page + 1 > maxPageNumberLimit){
        setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  };

  const handlerPrevBtn = () => {
    setPage(page - 1);
    if((page - 1) % pageNumberLimit == 0){
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }
  };

  const handleLoadMore = ( ) => {
    setTotalPages(totalPages + 6)
  }

  return (
    <div>
      <Cards dogs={currentItems} />
      <NumberPagination
        pages={pages}
        handleClick={handleClick}
        page={page}
        maxPageNumberLimit={maxPageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
        handlerNextBtn={handlerNextBtn}
        handlerPrevBtn={handlerPrevBtn}
        handleLoadMore={handleLoadMore}
      />
    </div>
  );
};

export default Pagination;

