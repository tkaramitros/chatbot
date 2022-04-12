import React, { useEffect } from "react";
import "./AdDetails.css";
import HomeDetails from "./HomeDetails";
import LandDetails from "./LandDetails";
import OfficeDetails from "./OfficeDetails";

const AdDetails = ({ ad }) => {
  console.log(ad);

  let floor;
  if (ad.additional.levels == 1) {
    floor = "st";
  } else if (ad.additional.levels == 2) {
    floor = "nd";
  } else if (ad.additional.levels == 3 || ad.additional.levels > 3) {
    floor = "rd";
  } else {
    floor = "";
  }

  let bathroom;
  if (ad.additional.bathrooms == 1) {
    bathroom = "bathroom";
  } else {
    bathroom = "bathrooms";
  }

  let pricePerSMeter = ad.price / ad.size;

  const extras = Object.entries(ad.additional).map(([key, value]) => {
    if (value == "No") {
      return (
        <ul class="list-group">
          <li class="list-group-item">
            <i
              class="bi bi-x"
              style={{ marginRight: "15px", color: "red" }}
            ></i>{" "}
            {key}
          </li>
        </ul>
      );
    } else if (value == "Yes") {
      return (
        <ul class="list-group">
          <li class="list-group-item">
            <i
              class="bi bi-check"
              style={{ marginRight: "15px", color: "green" }}
            ></i>{" "}
            {key}
          </li>
        </ul>
      );
    }
  });
  let property;
  if (ad.propType == "Home") {
    property = (
      <HomeDetails
        ad={ad}
        pricePerSMeter={pricePerSMeter}
        floor={floor}
        bathroom={bathroom}
        extras={extras}
      />
    );
  } else if (ad.propType == "Office") {
    property = (
      <OfficeDetails
        ad={ad}
        pricePerSMeter={pricePerSMeter}
        floor={floor}
        bathroom={bathroom}
        extras={extras}
      />
    );
  } else
    property = (
      <LandDetails
        ad={ad}
        pricePerSMeter={pricePerSMeter}
        floor={floor}
        bathroom={bathroom}
        extras={extras}
      />
    );

  return <div className="container container-card">{property}</div>;
};

export default AdDetails;
