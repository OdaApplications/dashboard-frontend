import React, { useState } from "react";
import { FilterSelects } from "components/MainLayout/ChartConstructor/AditionalSetings/FilterSelects/FilterSelects";
import { LayoutGrid } from "../LayoutGrid/LayoutGrid";
import { DNDSwitch } from "./DNDSwitch";
import * as SC from "./ChartGroupContainer.styled";

export const ChartGroupContainer = ({ chartGroup }) => {
  const [groupFilter, setGroupFilter] = useState([]);
  const [isDragable, setIsDragable] = useState(false);
  return (
    <SC.BoxChartContainerStyled>
      <SC.BoxTitleContainerStyled>
        <SC.TitleStyled>{chartGroup.title}</SC.TitleStyled>
        <DNDSwitch isDragable={isDragable} setIsDragable={setIsDragable} />
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
