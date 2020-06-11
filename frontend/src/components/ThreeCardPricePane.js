import React from "react";
import PriceCard from "./PriceCard";

const ThreeCardPane = (props) => {
  const veg = { ...props }.selection;
  const max_price = veg.max_price;
  const min_price = veg.min_price;
  const avg_price = veg.avg_price;
  const name = veg.name;
  return (
    <div>
      <p className="text-center h3">
        {name}
        &nbsp;
      </p>
      <p className="h6 text-center">(Today's Price in NRs.)</p>
      <br />
      <div className="row">
        <div className="col-sm">
          <PriceCard min={min_price} />
        </div>
        <div className="col-sm">
          <PriceCard avg={avg_price} />
        </div>
        <div className="col-sm">
          <PriceCard max={max_price} />
        </div>
      </div>
    </div>
  );
};

export default ThreeCardPane;
