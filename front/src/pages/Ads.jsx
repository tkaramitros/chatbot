import React from "react";
import { useNavigate } from "react-router-dom";
import "./Ads.css";

const Ads = ({ ad, setDetailedAd }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container container-ad">
        <img
          src={`data:image/png;base64,${ad.image}`}
          className="card-img-top"
          alt="..."
        />
        <div class="card2" style={{ width: "60%", marginBottom: "20px" }}>
          <div class="card-header">
            {ad.buyOrRent} {ad.propType} at {ad.city}
          </div>
          <div class="card-body">
            <h3 class="card-text">
              {ad.title}, {ad.size} m²
            </h3>
            <p class="card-text">{ad.description}</p>
            <div className="card-body" style={{ display: "flex" }}>
              <h3>€ {ad.price.toLocaleString()}</h3>
              <button
                type="button"
                className="btn btn-dark"
                style={{ marginLeft: "20px" }}
                onClick={() => {
                  setDetailedAd(ad);
                  navigate("/details");
                }}
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ads;
