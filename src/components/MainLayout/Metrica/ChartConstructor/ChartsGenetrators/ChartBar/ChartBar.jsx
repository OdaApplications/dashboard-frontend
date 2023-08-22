import React, { useState, useEffect } from "react";
import * as SC from "./ChartBar.styled";

import { useGetChartDataQuery } from "redux/API/chartApi";

export const ChartBar = ({ id, options, filter, type }) => {
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
