import React from "react";
import "./Card.css";
// import ImageOne from "../assets/ImageOne.jpg";
// import ImageTwo from "../assets/ImageTwo.jpg";
// import ImageThree from "../assets/ImageThree.jpg";

const Card = () => {
  return (
    <>
      <div className="container_card">
        <nav className="card">
          <img src="..." class="card-img-top" />
          <div className="card-body">
            <h6 className="card-title">Appartment</h6>
            <p className="card-text-nm ">Price: 100000</p>
            <p className="card-text-nm  ">Location: Thessaloniki</p>
            <a href="#" class="btn btn-primary">
              Informations
            </a>
          </div>
        </nav>

        <nav className="card">
          <img src="..." class="card-img-top" />
          <div className="card-body">
            <h6 className="card-title">Appartment</h6>
            <p className="card-text-nm">Price 100000</p>
            <p className="card-text-nm">Location Thessaloniki</p>
            <a href="#" class="btn btn-primary">
              Informations
            </a>
          </div>
        </nav>

        <nav className="card">
          <img src="..." class="card-img-top" />
          <div className="card-body">
            <h6 className="card-title">Appartment</h6>
            <p className="card-text-nm">Price 100000</p>
            <p className="card-text-nm">Location Thessaloniki</p>
            <a href="#" class="btn btn-primary">
              Informations
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Card;
