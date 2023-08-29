import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

import * as SC from "./ChartBarList.styled";
import { useGetChartDataQuery } from "redux/API/chartApi";
import { LoaderSmall } from "components/MainLayout/Loader";

export const ChartBarList = ({
  options,
  type,
  id,
  filter,
  filterSelects,
  groupFilter,
}) => {
  const [series, setSeries] = useState({});
  const [barHeight, setBarHeight] = useState(0);

  const { currentData, isFetching } = useGetChartDataQuery(
    {
      chartID: id,
      filter:
        Object.keys(filter).length > 0 && (filterSelects || groupFilter)
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

  useEffect(() => {
    if (series?.data?.length > 0) {
      setBarHeight(24 * series.data.length + 58);
    }
  }, [series]);

  if (!series) {
    return <div>no data</div>;
  }

  if (isFetching) {
    return (
      <SC.BoxChartBarListStyled>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoaderSmall />
        </Box>
      </SC.BoxChartBarListStyled>
    );
  }

  if (series?.data?.length > 0) {
    return (
      <SC.BoxChartBarListStyled>
        <Box
          sx={{
            height: "calc(100% )",
            overflowY: "scroll",
            borderRadius: "12px",
          }}
        >
          {Array.isArray(series.data) && (
            <SC.ChartBarListStyled
              options={{
                ...options,
                xaxis: {
                  ...options.xaxis,
                  categories: series.labels,
                },
                colors: ["#55A5B7"],
              }}
              series={[{ data: series.data }]}
              type={"bar"}
              height={`${barHeight}px`}
            />
          )}
        </Box>
      </SC.BoxChartBarListStyled>
    );
  } else {
    return (
      <SC.BoxChartBarListStyled>
        <Box
          sx={{
            height: "calc(100% )",
            overflowY: "scroll",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SC.NoDataMessage>{`Данні опрацьовуються.`}</SC.NoDataMessage>
        </Box>
      </SC.BoxChartBarListStyled>
    );
  }
};
