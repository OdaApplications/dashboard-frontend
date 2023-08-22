import React, { useState, useEffect } from "react";
import * as SC from "./ChartDonut.styled";

import { useGetChartDataQuery } from "redux/API/chartApi";

export const ChartDonut = ({ id, options, filter, type }) => {
  const [series, setSeries] = useState({ data: [], labels: [] });

  const { currentData } = useGetChartDataQuery(
    {
      chartID: id,
      filter:
        Object.keys(filter).length > 0
          ? encodeURIComponent(JSON.stringify(filter))
          : null,
    },
    { skip: !id }
  );

  useEffect(() => {
    if (currentData) {
      setSeries(currentData?.data.data);
    }
  }, [currentData]);

  if (series.length === 0) {
    return <div>no data</div>;
  }

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
