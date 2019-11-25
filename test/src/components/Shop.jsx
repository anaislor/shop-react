import React, { useEffect, useState } from "react";
import Pictures from "./Pictures";
import Pagination from "./Pagination";
import axios from "axios";

function Shop(props) {
  const [pictures, setPictures] = useState([]);
  var numberPerPage = 15;
  const [currentPage, setCurrentPage] = useState();
  const [pages, setPages] = useState(0);
  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
      setPictures(res.data);
    });
  }, []);

  useEffect(() => {
    setCurrentPage(pictures.splice(pagination, numberPerPage));
    setPages(Math.floor(pictures.length / numberPerPage));
  }, [pictures]);

  function nextPagination() {
    setPagination(pagination + 1);
    setCurrentPage(pictures.splice(pagination * numberPerPage, numberPerPage));
  }

  function previousPagination() {
    setPagination(pagination - 1);
    setCurrentPage(pictures.splice(pagination * numberPerPage, numberPerPage));
  }

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My shop</h1>
      {!pictures.length ? (
        ""
      ) : (
        <div className="list-group mb-4">
          {currentPage.map(picture => (
            <Pictures
              key={picture.id}
              url={picture.thumbnailUrl}
              title={picture.title}
              onClick={() => props.addToBasket(picture)}
              remove={() => props.remove(picture)}
              minus={false}
            />
          ))}
        </div>
      )}
      <Pagination
        pages={pages}
        pagination={pagination}
        nextPagination={nextPagination}
        previousPagination={previousPagination}
      />
    </div>
  );
}

export default Shop;
