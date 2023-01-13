import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const datapionterValues = props.datapionts.map(
    (datapiont) => datapiont.value
  );
  console.log(datapionterValues);

  const totalMaxValue = Math.max(...datapionterValues);

  return (
    <div className="chart">
      {props.datapionts.map((datapiont) => (
        <ChartBar
          key={datapiont.label}
          value={datapiont.value}
          maxValue={totalMaxValue}
          label={datapiont.label}
        />
      ))}
    </div>
  );
};

export default Chart;
