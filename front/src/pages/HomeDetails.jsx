import React from "react";

const HomeDetails = ({ ad, pricePerSMeter, floor, bathroom, extras }) => {
  let bedroom;
  if (ad.additional.bedroom == 1) {
    bedroom = "bedroom";
  } else {
    bedroom = "bedrooms";
  }
  return (
    <div class="card mb-3">
      <img
        src={`data:image/png;base64,${ad.image}`}
        class="card-img-top ad-image"
        alt="..."
      />
      <div class="card-body">
        <h2 class="card-title-ad ">
          {ad.propType} , {ad.size} m²
        </h2>
        <p class="card-text">{ad.city}</p>
        <br />
        <h3 class="card-text">€ {ad.price.toLocaleString()}</h3>
        <p class="card-text">
          {ad.additional.levels}
          {floor} floor , {ad.additional.bedroom} {bedroom} ,{" "}
          {ad.additional.bathrooms} {bathroom}
        </p>
        <br />
        <h3 class="card-text">Description</h3>
        <p class="card-text">{ad.description}</p>
        <h3 class="card-text">Features</h3>
        <div>
          <div class="card features" style={{ width: "18rem" }}>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Price:</li>
              <li class="list-group-item">Price per m²:</li>
              <li class="list-group-item">Size:</li>
              <li class="list-group-item">Floor:</li>
              <li class="list-group-item">Kitchen:</li>
              <li class="list-group-item">Bathrooms:</li>
              <li class="list-group-item">Livingrooms:</li>
              <li class="list-group-item">Type of Heating:</li>
              <li class="list-group-item">Energy efficiency:</li>
              <li class="list-group-item">Year of built:</li>
              <li class="list-group-item">Renovation Year:</li>
              <li class="list-group-item">Type of View:</li>
              <li class="list-group-item">Created At:</li>
            </ul>
          </div>
          <div class="card features-details" style={{ width: "18rem;" }}>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">€ {ad.price.toLocaleString()}</li>
              <li class="list-group-item">
                € {pricePerSMeter.toLocaleString()}
              </li>
              <li class="list-group-item">{ad.size} m²</li>
              <li class="list-group-item">
                {ad.additional.levels}
                {floor}
              </li>
              <li class="list-group-item">{ad.additional.kichen}</li>
              <li class="list-group-item">{ad.additional.bathrooms}</li>
              <li class="list-group-item">{ad.additional.livingroom}</li>
              <li class="list-group-item">{ad.additional.typeofheating}</li>
              <li class="list-group-item">{ad.additional.energyefficiency}</li>
              <li class="list-group-item">{ad.additional.yearofbuilt}</li>
              <li class="list-group-item">{ad.additional.renovationyear}</li>
              <li class="list-group-item">{ad.additional.typeofview}</li>
              <li class="list-group-item">{ad.createdAt.slice(0, 10)}</li>
            </ul>
          </div>
        </div>
        <h3 class="card-text">Extras</h3>
        <div>{extras}</div>
      </div>
    </div>
  );
};

export default HomeDetails;
