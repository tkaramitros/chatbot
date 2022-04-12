import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Rent.css";
import { useLocation } from "react-router-dom";

import Items from "../../pages/Items";

const Rent = () => {
  const [sorting, setSorting] = useState("createdAt");
  const [loading, setLoading] = useState("");
  const [propType, setPropType] = useState("");
  const [ads, setAds] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  let route;
  useEffect(() => {
    let cancel;
    if (propType == "Home") {
      route = "home";
    } else if (propType == "Office") {
      route = "office";
    } else if (propType == "Land") {
      route = "land";
    } else route = "post";
    const fetchData = async () => {
      setLoading(true);

      try {
        const { data, pages: totalPages } = await axios({
          method: "GET",
          url: `/${route}?page=${page}&sort=${sorting}&buyOrRent=Buy`,
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });

        setAds(data.aggelies);

        setPages(data.pages);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) return;
        console.log(error.response);
      }
    };

    fetchData();

    return () => cancel();
  }, [page, sorting, propType]);

  let filtering;
  if (propType == "") {
    filtering = (
      <p className="property-message">Please select property type!</p>
    );
  } else {
    filtering = (
      <Items
        page={page}
        pages={pages}
        setPage={setPage}
        setSorting={setSorting}
        ads={ads}
        loading={loading}
      />
    );
  }

  return (
    <>
      <div className="containerfluid app-bg">
        <div className="main-container">
          <div className="container container__card">
            <div class="radiocheck btn-group">
              <input
                type="radio"
                class="btn-check"
                value="Home"
                name="options"
                id="option1"
                autocomplete="off"
                onClick={(e) => setPropType(e.target.value)}
              />
              <label class="btn btn-secondary" for="option1">
                Home
              </label>

              <input
                type="radio"
                class="btn-check"
                value="Office"
                name="options"
                id="option2"
                autocomplete="off"
                onClick={(e) => setPropType(e.target.value)}
              />
              <label class="btn btn-secondary" for="option2">
                Office
              </label>

              <input
                type="radio"
                class="btn-check"
                value="Land"
                name="options"
                id="option3"
                autocomplete="off"
                onClick={(e) => setPropType(e.target.value)}
              />
              <label class="btn btn-secondary" for="option3">
                Land
              </label>
            </div>
            {filtering}
          </div>
        </div>
      </div>
    </>
  );
};

export default Rent;
