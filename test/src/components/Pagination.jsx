import React from "react";

function Pagination(props) {
  return (
    <div>
      {props.pagination <= 1 ? (
        ""
      ) : (
        <button onClick={props.previousPagination}>Previous Page</button>
      )}
      <span>Page: {props.pagination}</span>
      {props.pagination >= props.pages ? (
        ""
      ) : (
        <button onClick={props.nextPagination}>Next Page</button>
      )}
    </div>
  );
}

export default Pagination;
