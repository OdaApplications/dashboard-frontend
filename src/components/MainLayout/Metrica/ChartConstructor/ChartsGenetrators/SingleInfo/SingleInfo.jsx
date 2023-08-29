import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

import * as SC from "./SingleInfo.styled";
import { useGetChartDataQuery } from "redux/API/chartApi";
import { LoaderSmall } from "components/MainLayout/Loader";

export const SingleInfo = ({
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

  if (!options) {
    return <div>no data</div>;
  }

  if (isFetching) {
    return (
      <SC.BoxSingleInfoStyled>
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
      </SC.BoxSingleInfoStyled>
    );
  }

  if (Object.keys(series)?.length > 0) {
    return (
      <SC.BoxSingleInfoStyled>
        <SC.TypographyTitleStyled>{options.text}</SC.TypographyTitleStyled>
        {typeof series?.data[0] === "string" ||
          (typeof series?.data[0] === "number" && series?.data?.length > 0 ? (
            <SC.TypographySubTitleStyled>
              {series?.data[0]}
              {options?.addText && ` ${options?.addText}`}
            </SC.TypographySubTitleStyled>
          ) : (
            <SC.NoDataMessage>{`Данні опрацьовуються.`}</SC.NoDataMessage>
          ))}
      </SC.BoxSingleInfoStyled>
    );
  }
};
