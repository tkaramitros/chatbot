import React, { useState } from "react";
import Ads from "../pages/Ads";
import Pagination from "../components/Pagination";
import "./Items.css";

const Items = ({
  page,
  pages,
  setPage,
  loading,
  ads,

  setSorting,
}) => {
  let loader;
  if (loading) {
    loader = <div className="spinner-border" role="status"></div>;
  }

  const [sort, setSort] = useState("");
  const [sortDirection, setSortDirection] = useState("");

  const handleSorting = () => {
    setSorting(`${sortDirection}${sort}`);
    console.log(sort, sortDirection);
  };

  const clearSorting = () => {
    setSorting(`createdAt`);
  };

  return (
    <div className="item__card">
      {loader}
      <br />
      <Pagination page={page} pages={pages} changePage={setPage} />
      <div className="row">
        <select
          class="form-select form-select-sm col-2"
          aria-label=".form-select-sm example"
          onChange={(e) => setSort(e.target.value)}
        >
          <option disabled selected>
            Sort by
          </option>
          <option value="price">Price</option>
          <option value="size">Size</option>
        </select>
        <select
          class="form-select form-select-sm col=2"
          aria-label=".form-select-sm example"
          onChange={(e) => setSortDirection(e.target.value)}
        >
          <option disabled selected>
            Direction
          </option>
          <option value="">Ascending</option>
          <option value="-">Descending</option>
        </select>
        <button
          className="btn btn-filter btn-outline-dark"
          onClick={handleSorting}
        >
          Apply filters
        </button>
        <button
          className="btn btn-filter btn-outline-dark"
          onClick={clearSorting}
        >
          Clear filters
        </button>
      </div>
      <div>
        <div>
          {ads.map((ad) => (
            <div key={ad._id}>
              <Ads ad={ad} />
            </div>
          ))}
        </div>
        <Pagination page={page} pages={pages} changePage={setPage} />
      </div>
    </div>
  );
};

export default Items;
