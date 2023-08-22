import React, { useEffect, useState } from "react";
import { FilterSelects } from "components/MainLayout/Metrica/ChartConstructor/AditionalSetings/FilterSelects/FilterSelects";
import { LayoutGrid } from "../LayoutGrid/LayoutGrid";
import * as SC from "./ChartGroupContainer.styled";
import { MessageBox } from "components/MainLayout/MessageBox";
import { Box } from "@mui/material";

export const ChartGroupContainer = ({ person, chartGroup, isDragable }) => {
  const [groupFilter, setGroupFilter] = useState([]);
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    if (person === "cabinet") {
      setCharts(chartGroup.charts);
    } else {
      const puplicCharts = chartGroup.charts.filter((chart) => chart.public);
      setCharts(puplicCharts);
    }
  }, [person, chartGroup.charts]);

  if (charts && charts.length > 0) {
    return (
      <SC.BoxChartContainerStyled>
        <SC.BoxTitleContainerStyled>
          <SC.TitleStyled>{chartGroup.title}</SC.TitleStyled>
        </SC.BoxTitleContainerStyled>
        {chartGroup.filterSelects && (
          <SC.BoxSubTitleContainerStyled>
            <FilterSelects
              filterSelects={chartGroup.filterSelects}
              setGroupFilter={setGroupFilter}
            />
          </SC.BoxSubTitleContainerStyled>
        )}
        <LayoutGrid
          isDragable={isDragable}
          charts={charts}
          groupFilter={groupFilter}
        />
      </SC.BoxChartContainerStyled>
    );
  } else {
    return (
      <SC.BoxChartContainerStyled>
        <SC.BoxTitleContainerStyled>
          <SC.TitleStyled>{chartGroup.title}</SC.TitleStyled>
        </SC.BoxTitleContainerStyled>
        <Box sx={{ margin: "100px" }}>
          <MessageBox text={"Інформація опрацьовується"} />
        </Box>
      </SC.BoxChartContainerStyled>
    );
  }
};
