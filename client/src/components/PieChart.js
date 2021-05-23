import React from "react";
import { render } from "react-dom";
import { VictoryPie,VictoryAxis } from "victory";

const PieChart = () => {
  return (
    <div>
  <VictoryPie radius="90"
  labelRadius="40"/>
  <VictoryAxis
  tickValues={[1, 2, 3, 4]}
  tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
/>


        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`$${x / 1000}k`)}
        />


</div>
  );
};
export default PieChart;