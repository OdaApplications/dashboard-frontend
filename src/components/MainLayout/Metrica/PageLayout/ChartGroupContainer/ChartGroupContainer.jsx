import React, { useState } from "react";
import { FilterSelects } from "components/MainLayout/Metrica/ChartConstructor/AditionalSetings/FilterSelects/FilterSelects";
import { LayoutGrid } from "../LayoutGrid/LayoutGrid";
import * as SC from "./ChartGroupContainer.styled";

export const ChartGroupContainer = ({ chartGroup, isDragable }) => {
  const [groupFilter, setGroupFilter] = useState([]);
  return (
    <SC.BoxChartContainerStyled>
      <SC.BoxTitleContainerStyled>
        <SC.TitleStyled>{chartGroup.title}</SC.TitleStyled>
      </SC.BoxTitleContainerStyled>
      {chartGroup.filterSelects && (
        <SC.BoxSubTitleContainerStyled>
          <FilterSelects
            filterSelects={chartGroup.filterSelects}
            data={chartGroup.charts[0].chartConfig.data}
            setGroupFilter={setGroupFilter}
          />
        </SC.BoxSubTitleContainerStyled>
      )}
      <LayoutGrid
        isDragable={isDragable}
        charts={chartGroup.charts}
        groupFilter={groupFilter}
      />
    </SC.BoxChartContainerStyled>
  );
};
