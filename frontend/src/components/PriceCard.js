import React from "react";
import "./PriceCard.css";

const PriceCard = (props) => {
  const data = { ...props };
  let card_bg = "";
  let value = 0;
  let title = "";
  if (data.hasOwnProperty("min")) {
    card_bg = "bg-secondary";
    value = data.min;
    title = "Min Price";
  } else if (data.hasOwnProperty("avg")) {
    card_bg = "bg-success";
    value = data.avg;
    title = "Average Price";
  } else if (data.hasOwnProperty("max")) {
    card_bg = "bg-danger";
    value = data.max;
    title = "Max Price";
  }
  return (
    <div className="text-center">
      <div className={`pricecard card text-white text-center p-3 ${card_bg}`}>
        <p className="lead">{title}</p>
        <p className="h1">
          {value}
        </p>
      </div>
    </div>
  );
};

export default PriceCard;
