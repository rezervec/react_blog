import React from "react";
import { usePagination } from "../../../hooks/usePagination";

const Pagination = ({pagesAmount, activePage, setActivePage}) => {
  // считаем сколько у нас страниц
  let pagesArray = usePagination(pagesAmount)

  return (
    <div className="postPagination">
      {pagesArray.map(page =>
        <span
          key={page}
          onClick={() => setActivePage(page)}
          className={page === activePage ? "itemPagination itemPagination_active" : "itemPagination"}
        >
          {page}
        </span>
      )}
    </div>
  )
}

export default Pagination