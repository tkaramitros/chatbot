import React, { useState } from "react";
import "./Searchbar.css";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [buyOrRent, setBuyOrRent] = useState("");
  const [propType, setPropType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(location, price, size, buyOrRent, propType);
  };

  return (
    <>
      <div className="fadeTop" />
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
                value="buy"
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
                value="rent"
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
                  value="home"
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
                  value="office"
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
                  value="land"
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
                    onChange={(e) => setLocation(e.target.value)}
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
      <div className="fadeBottom" />
    </>
  );
};

export default SearchBar;
