import React from "react";
import * as SC from "./ChartDonut.styled";

export const ChartDonut = ({ options, series, type }) => {
  if (series.length === 0) {
    return <div>no data</div>;
  }
  console.log("series", series.data);
  console.log("options123", {
    ...options,
    labels: series.labels,
  });
  return (
    <SC.BoxDonutStyled>
      <SC.DonutBarStyled
        options={{
          chart: {
            id: "donut-chart",
          },

          dataLabels: {
            enabled: true,
          },
          plotOptions: {
            pie: {
              donut: {
                size: "50%",
              },
            },
          },
          legend: {
            labels: {
              colors: "#000т",
            },
            position: "top",
          },
          labels: ["ЦНАП", "ТП", "ВРМ", "Дія Центр"],
        }}
        series={series.data}
        type={type}
        height={"100%"}
      />
    </SC.BoxDonutStyled>
  );
};
