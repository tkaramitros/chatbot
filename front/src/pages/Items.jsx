import React from "react";
import Ads from "../pages/Ads";
import Pagination from "../components/Pagination";

const Items = ({ page, pages, setPage, loading, ads }) => {
  let loader;
  if (loading) {
    loader = <div className="spinner-border" role="status"></div>;
  }

  return (
    <div>
      {loader}
      <br />
      <div>
        <Pagination page={page} pages={pages} changePage={setPage} />
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
