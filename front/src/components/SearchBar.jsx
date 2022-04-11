import React, { useEffect, useState } from "react";
import "./Searchbar.css";
import axios from "axios";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Items from "../pages/Items";
import Chatbot from "../Chatbot/Chatbot";

const SearchBar = () => {
  const navigate = useNavigate();
  const { urlFilter } = useParams();
  const location = useLocation();
  const params = location.search ? location.search : null;

  const [filter, setFilter] = useState("");
  const [sorting, setSorting] = useState("createdAt");

  const [loading, setLoading] = useState("");

  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [buyOrRent, setBuyOrRent] = useState("");
  const [propType, setPropType] = useState("");

  const [ads, setAds] = useState([]);

  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  const [userQuery, setUserQuery] = useState(false);
  const [checkHelper, setCheckHelper] = useState(false);

  const [open, setOpen] = useState(true);

  useEffect(() => {
    let cancel;

    const fetchData = async () => {
      setLoading(true);
      let query;
      try {
        if (params && !filter) {
          query = params;
        } else {
          query = filter;
        }

        const { data, pages: totalPages } = await axios({
          method: "GET",
          url: `/post?page=${page}&sort=${sorting}${query}`,
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
  }, [params, filter, page, sorting]);

  const handleSubmit = () => {
    const buyLowPrice = price - 10000;
    const buyHighPrice = +price + 10000;

    const rentLowPrice = price - 100;
    const rentHighPrice = +price + 100;

    const lowerSize = size - 15;
    const higherSize = +size + 15;

    const buyOrRentValue = buyOrRent ? `buyOrRent=${buyOrRent}` : "";
    const newPrice =
      buyOrRent === "Buy"
        ? `price[gte]=${buyLowPrice}&price[lte]=${buyHighPrice}`
        : `price[gte]=${rentLowPrice}&price[lte]=${rentHighPrice}`;
    const priceValue =
      price && buyOrRent ? newPrice : price ? `price=${price}` : "";

    const sizeValue = size
      ? `size[gte]=${lowerSize}&size[lte]=${higherSize}`
      : "";
    const cityValue = city ? `city=${city}` : "";
    const propTypeValue = propType ? `propType=${propType}` : "";
    const urlFilter = `&${priceValue}&${sizeValue}&${cityValue}&${buyOrRentValue}&${propTypeValue}`;

    setFilter(urlFilter);
    navigate("/items/" + urlFilter);
  };

  let filtering;

  if (filter === "") {
    filtering = "";
  } else {
    filtering = ads[0] ? (
      <div>
        <Items
          page={page}
          pages={pages}
          setPage={setPage}
          setSorting={setSorting}
          ads={ads}
          loading={loading}
        />
      </div>
    ) : (
      <div className="ad-results">
        Unfortunately no results match your criteria.
      </div>
    );
  }

  const getResults = async () => {
    const results = await axios.get("/dialogflow/getURL");
    const chatQuery = results.data.URL[0];
    setBuyOrRent(chatQuery.buyOrRent);
    setCity(chatQuery.city);
    setPrice(chatQuery.price);
    setSize(chatQuery.size);
    setPropType(chatQuery.propType);
    setCheckHelper(true);
  };

  useEffect(() => {
    if (userQuery === true) {
      console.log(price, city);
      handleSubmit();
    }
    setUserQuery(false);
    setCheckHelper(false);
  }, [checkHelper]);

  const toggleChat = open ? (
    <Chatbot setUserQuery={setUserQuery} getResults={getResults} />
  ) : (
    ""
  );

  const buttonIcon = open ? (
    <i class="bi bi-x-lg" style={{ color: "white" }}></i>
  ) : (
    <i class="bi bi-messenger" style={{ color: "white" }}></i>
  );

  return (
    <>
      <div style={{ position: "absolute" }}>
        {toggleChat}
        <button
          type="button"
          class="close-chatbot"
          onClick={() => setOpen(!open)}
        >
          {buttonIcon}
        </button>
      </div>

      <div className="search-bar">
        <div className="container">
          <div className="selection row">
            <div
              className="btn-group col-sm col-lg-2"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                value="Buy"
                onClick={(e) => setBuyOrRent(e.target.value)}
                name="btnradio"
                id="btnradio1"
                autoComplete="off"
              />
              <label
                className="btn select-button btn-outline-dark"
                htmlFor="btnradio1"
              >
                Buy
              </label>

              <input
                type="radio"
                className="btn-check"
                value="Rent"
                onClick={(e) => setBuyOrRent(e.target.value)}
                name="btnradio"
                id="btnradio2"
                autoComplete="off"
              />
              <label
                className="btn select-button btn-outline-dark"
                htmlFor="btnradio2"
              >
                Rent
              </label>
            </div>
            <div className="box-btn2 col-sm col-lg-3 ">
              <div className="form-check">
                <input
                  className="form-check-input"
                  value="Home"
                  onClick={(e) => setPropType(e.target.value)}
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Home
                </label>
              </div>
              <div className="form-check professional">
                <input
                  className="form-check-input"
                  value="Office"
                  onClick={(e) => setPropType(e.target.value)}
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Office
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  value="Land"
                  onClick={(e) => setPropType(e.target.value)}
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Land
                </label>
              </div>
            </div>
          </div>

          <div className="d-flex row no-gutters ">
            <nav className="navbar navbar-light  col-lg-5 col-sm col-md">
              <form className="form-inline">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="bi bi-geo-alt"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Location"
                    onChange={(e) => setCity(e.target.value)}
                    aria-label="Location"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </form>
            </nav>
            {/*<div className='vertical-line'></div>*/}
            <nav className="navbar navbar-light price col-lg col-sm">
              <form className="form-inline">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text icon" id="basic-addon1">
                      <i className="bi bi-currency-euro"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Price"
                    onChange={(e) => setPrice(e.target.value)}
                    aria-label="Price"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </form>
            </nav>
            {/*<div className='vertical-line'></div>*/}
            <nav className="navbar navbar-light col-lg col">
              <form className="form-inline">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text icon" id="basic-addon1">
                      <i className="bi bi-house-fill"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Size"
                    onChange={(e) => setSize(e.target.value)}
                    aria-label="Size"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </form>
            </nav>
            <button
              className="btn search-btn btn-outline-warning "
              type="submit"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div>{filtering}</div>
    </>
  );
};

export default SearchBar;
