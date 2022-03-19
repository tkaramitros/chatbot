import React from "react";
import ImageFour from "../assets/ImageFour.jpg";
import "./Ads.css";

const Ads = ({ ad }) => {
  return (
    <>
      <div className="fadeTop" />
      <div className="search-bar">
        <div class="card" style={{ width: "35rem", marginBottom: "20px" }}>
          <img src={ImageFour} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{ad.title}</h5>
            <p class="card-text">{ad.description}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Location: {ad.city}</li>
            <li class="list-group-item">Price: {ad.price} €</li>
            <li class="list-group-item">Size: {ad.size} m²</li>
          </ul>
          <div class="card-body">
            {ad.buyOrRent} {ad.propType}
            <button
              type="button"
              class="btn btn-dark"
              style={{ marginLeft: "20px" }}
            >
              View
            </button>
          </div>
        </div>
      </div>
      <div className="fadeBottom" />
    </>
  );
};

export default Ads;
