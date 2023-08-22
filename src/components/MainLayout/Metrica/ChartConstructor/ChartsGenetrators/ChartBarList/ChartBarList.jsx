import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

import * as SC from "./ChartBarList.styled";

export const ChartBarList = ({ options, type, series }) => {
  const [barHeight, setBarHeight] = useState(0);

  useEffect(() => {
    if (series.data.length > 0) {
      setBarHeight(24 * series[0].data.length);
    }
  }, [series]);

  if (!series) {
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
        {Array.isArray(series) && (
          <SC.ChartBarListStyled
            options={{
              ...options,
              xaxis: {
                categories: series.labels,
              },
              colors: ["#55A5B7"],
            }}
            series={series.data}
            type={"bar"}
            height={`${barHeight}px`}
          />
        )}
      </Box>
    </SC.BoxChartBarListStyled>
  );
};
