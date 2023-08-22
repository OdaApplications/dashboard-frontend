import React from "react";
import * as SC from "./ChartBar.styled";

export const ChartBar = ({ options, series, type }) => {
  if (series.length === 0) {
    return <div>no data</div>;
  }

  return (
    <SC.BoxChartBarStyled>
      <SC.ChartBarStyled
        options={{
          ...options,
          xaxis: {
            categories: series.labels,
          },
          colors: ["#55A5B7"],
        }}
        series={[{ data: series.data }]}
        type={type}
        height={"100%"}
      />
    </SC.BoxChartBarStyled>
  );
};
