/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import _ from "lodash";

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pageCount = items / pageSize;
  if (Math.ceil(pageCount) === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <div className="container">
      <nav>
        <ul className="pagination pagination-lg ">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item-active" : "page-item"
              }
            >
              <a
                style={{ cursor: "pointer" }}
                onClick={() => onPageChange(page)}
                className="page-link"
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;