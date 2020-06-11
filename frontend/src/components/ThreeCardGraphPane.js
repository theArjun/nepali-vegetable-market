import React from "react";
import LineChart from "./LineChart";

import "./ThreeCardGraphPane.css";

const ThreeCardGraphPane = (props) => {
  const lastTenDaysData = { ...props }.data;
  const date_list = [];
  const min_price_list = [];
  const avg_price_list = [];
  const max_price_list = [];
  const days_before_list = [];

  for (const [date, pricing] of Object.entries(lastTenDaysData)) {
    if (date === "unit") {
      continue;
    }
    date_list.push(date);
    min_price_list.push(pricing.min_price);
    avg_price_list.push(pricing.avg_price);
    max_price_list.push(pricing.max_price);
    days_before_list.push(pricing.days_before);
  }

  const min_price_list_temp = new Array(min_price_list.length).fill(0);
  const max_price_list_temp = new Array(max_price_list.length).fill(0);
  const avg_price_list_temp = new Array(avg_price_list.length).fill(0);
  const date_list_temp = new Array(date_list.length).fill("");

  for (let index = 0; index < min_price_list.length; index++) {
    const required_position = days_before_list[index];
    min_price_list_temp[required_position] = min_price_list[index];
    max_price_list_temp[required_position] = max_price_list[index];
    avg_price_list_temp[required_position] = avg_price_list[index];
    date_list_temp[required_position] = date_list[index];
  }

  return (
    <div>
      <br />
      <p className="text-center h3">
        Pricing Graph per {lastTenDaysData.unit}&nbsp;
        <span className="h6">(From last 10 days)</span>
      </p>
      <LineChart
        date_list={date_list_temp.reverse()}
        min_price_list={min_price_list_temp.reverse()}
        avg_price_list={avg_price_list_temp.reverse()}
        max_price_list={max_price_list_temp.reverse()}
      />
    </div>
  );
};

export default ThreeCardGraphPane;
