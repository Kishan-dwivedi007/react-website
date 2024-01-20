import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../assets/breadcrum_arrow.png";

const Breadcrum = (product) => {
  const { name, category } = product.product[0];
  // console.log(product.product[0].name);
  return (
    <div className="breadcrum">
      Home <img src={arrow_icon} alt="icon" />
      Shop <img src={arrow_icon} alt="icon" />
      {category} <img src={arrow_icon} alt="icon" />
      {name}
    </div>
  );
};

export default Breadcrum;
