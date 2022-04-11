import React from "react";
import "./Ads.css";

const Ads = ({ ad }) => {
  return (
    <>
      <div className="search-bar2">
        <div className="card" style={{ width: "35rem", marginBottom: "20px" }}>
          <img
            src={`data:image/png;base64,${ad.image}`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{ad.title}</h5>
            <p className="card-text">{ad.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Location: {ad.city}</li>
            <li className="list-group-item">Price: {ad.price} €</li>
            <li className="list-group-item">Size: {ad.size} m²</li>
          </ul>
          <div className="card-body">
            {ad.buyOrRent} {ad.propType}
            <button
              type="button"
              className="btn btn-dark"
              style={{ marginLeft: "20px" }}
            >
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ads;
