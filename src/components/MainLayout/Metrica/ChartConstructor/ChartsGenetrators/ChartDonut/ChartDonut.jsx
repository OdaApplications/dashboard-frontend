import React, { useState, useEffect } from "react";
import * as SC from "./ChartDonut.styled";
import { labelDonutFormaterFunc } from "components/helpers";
import { Box } from "@mui/material";

import { useGetChartDataQuery } from "redux/API/chartApi";
import { LoaderSmall } from "components/MainLayout/Loader";

export const ChartDonut = ({
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
      <SC.BoxDonutStyled>
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
      </SC.BoxDonutStyled>
    );
  }

  if (Object.keys(series).length > 0) {
    return (
      <SC.BoxDonutStyled>
        <SC.DonutBarStyled
          options={{
            ...options,
            dataLabels: options.dataLabels.formatter
              ? {
                  ...options.dataLabels,
                  formatter: labelDonutFormaterFunc(),
                }
              : options.dataLabels,
          }}
          series={series.data}
          type={type}
          height={"100%"}
        />
      </SC.BoxDonutStyled>
    );
  } else {
    return (
      <SC.BoxDonutStyled>
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
      </SC.BoxDonutStyled>
    );
  }
};
