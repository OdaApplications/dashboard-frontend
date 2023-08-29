import React, { useState, useEffect } from "react";

import * as SC from "./ChartBar.styled";
import { useGetChartDataQuery } from "redux/API/chartApi";
import { Box } from "@mui/material";
import { LoaderSmall } from "components/MainLayout/Loader";

export const ChartBar = ({
  id,
  options,
  filter,
  type,
  filterSelects,
  groupFilter,
}) => {
  const [series, setSeries] = useState({});

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

  if (series.length === 0) {
    return <div>no data</div>;
  }

  if (isFetching) {
    return (
      <SC.BoxChartBarStyled>
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
      </SC.BoxChartBarStyled>
    );
  }
  if (series?.data?.length > 0) {
    return (
      <SC.BoxChartBarStyled>
        <SC.ChartBarStyled
          options={{
            ...options,
            xaxis: {
              ...options.xaxis,
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
  } else {
    return (
      <SC.BoxChartBarStyled>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SC.NoDataMessage>{`Данні опрацьовуються.`}</SC.NoDataMessage>
        </Box>
      </SC.BoxChartBarStyled>
    );
  }
};
