import "../Style/NumberPagination.css";
const NumberPagination = ({
  pages,
  handleClick,
  page,
  maxPageNumberLimit,
  minPageNumberLimit,
  handlerPrevBtn,
  handlerNextBtn,
  handleLoadMore
}) => {
  return (
    <>
    <ul className="pagesNumber">
      <li>
      <button disabled={page == pages[0] ? true : false} onClick={handlerPrevBtn}>
          <span className="span-mother">
            <span>P</span>
            <span>r</span>
            <span>e</span>
            <span>v</span>
          </span>
          <span className="span-mother2">
            <span>P</span>
            <span>r</span>
            <span>e</span>
            <span>v</span>
          </span>
        </button>
      </li>
      {pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <li
              className={page == number ? "active" : null}
              key={number}
              id={number}
              onClickCapture={handleClick}
            >
              {number}
            </li>
          );
        } else {
          return null;
        }
      })}
      <li>
        <button disabled={page == pages[pages.length - 1]? true : false} onClick={handlerNextBtn}>
          <span className="span-mother">
            <span>N</span>
            <span>e</span>
            <span>x</span>
            <span>t</span>
          </span>
          <span className="span-mother2">
            <span>N</span>
            <span>e</span>
            <span>x</span>
            <span>t</span>
          </span>
        </button>
      </li>
    </ul>
      <div className="masbuton">
      <button  disabled={page == pages[pages.length - 1]? true : false} onClick={handleLoadMore}>
          <span className="span-mother">
            <span>M</span>
            <span>o</span>
            <span>r</span>
            <span>e</span>
          </span>
          <span className="span-mother2">
            <span>M</span>
            <span>o</span>
            <span>r</span>
            <span>e</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default NumberPagination;
