import React from "react";
import { useParams, useNavigate } from "react-router";

const AdDetails = ({ filter }) => {
  const { details } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default AdDetails;
