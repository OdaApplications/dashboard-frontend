import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

import * as SC from "./ChartBarList.styled";

export const ChartBarList = ({ chartConfig, filter }) => {
  const [currentSeries, setCurrentSeries] = useState([]);
  const [barHeight, setBarHeight] = useState(0);

  useEffect(() => {
    if (chartConfig?.series) {
      setCurrentSeries(chartConfig.series);
    }
    if (chartConfig?.data) {
      let newSeries = chartConfig.data;

      for (const elem of filter) {
        if (newSeries) {
          if (elem === "") {
            newSeries = newSeries[Object.keys(newSeries)[0]];
          } else {
            newSeries = newSeries[elem];
          }
        }
      }

      setCurrentSeries(newSeries);
    }
  }, [chartConfig, filter]);

  useEffect(() => {
    if (currentSeries[0]?.data?.length > 0) {
      setBarHeight(24 * currentSeries[0].data.length);
    }
  }, [currentSeries]);

  if (!chartConfig.options) {
    return <div>no data</div>;
  }
  return (
    <SC.BoxChartBarListStyled>
      <Box
        sx={{
          height: "calc(100% )",
          overflowY: "scroll",
          borderRadius: "12px",
        }}
      >
        {Array.isArray(currentSeries) && (
          <SC.ChartBarListStyled
            options={{ ...chartConfig.options, colors: ["#55A5B7"] }}
            series={currentSeries}
            type={"bar"}
            height={`${barHeight}px`}
          />
        )}
      </Box>
    </SC.BoxChartBarListStyled>
  );
};
