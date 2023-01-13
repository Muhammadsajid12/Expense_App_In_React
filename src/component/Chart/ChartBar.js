import React from "react";
import "./CharBar.css";
const num = 5;
for (let i = 0; i < num; i++) {
  console.log("outerloop" + i);
  for (let j = i; j < num; j++) {
    console.log("*");
  }
}

const ChartBar = (props) => {
  let barFillHieght = "0%";
  //   console.log(props);
  if (props.maxValue > 0) {
    barFillHieght = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  console.log(barFillHieght);

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{
            height: barFillHieght,
            backgroundColor: barFillHieght > "50" ? "red" : "blue",
          }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
