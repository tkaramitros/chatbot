import React from "react";

const LandDetails = ({ ad, pricePerSMeter, bathroom, extras }) => {
  let floor;
  if (ad.additional.floorlevel == 1) {
    floor = "st";
  } else if (ad.additional.floorlevel == 2) {
    floor = "nd";
  } else if (ad.additional.floorlevel == 3 || ad.additional.floorlevel > 3) {
    floor = "rd";
  } else {
    floor = "";
  }

  let room;
  if (ad.additional.rooms == 1) {
    room = "room";
  } else {
    room = "rooms";
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
              <li class="list-group-item">Access From:</li>
              <li class="list-group-item">Coverage Ratio:</li>
              <li class="list-group-item">Orientation:</li>
              <li class="list-group-item">Structure Factor:</li>
              <li class="list-group-item">Type of Use:</li>
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
              <li class="list-group-item">{ad.additional.accessfrom}</li>
              <li class="list-group-item">{ad.additional.coverageratio}</li>
              <li class="list-group-item">{ad.additional.orientation}</li>
              <li class="list-group-item">{ad.additional.structurefactor}</li>
              <li class="list-group-item">{ad.additional.typeofuse}</li>
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

export default LandDetails;
