import React, { useState, useEffect } from "react";
import ChartsGenetrators from "./ChartsGenetrators";
import * as SC from "./ChartConstructor.styled";
import { AditionalSetings } from "./AditionalSetings/AditionalSetings";

export const ChartConstructor = ({ chart, groupFilter }) => {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    if (groupFilter) {
      setFilter(groupFilter);
    }
  }, [groupFilter]);

  if (!chart) {
    return null;
  }

  const TypeChart = ChartsGenetrators[chart?.chartConfig.type];
  const { aditionalSetings = null } = chart?.chartConfig;

  return (
    <SC.CahrtConstructorWrapper>
      <SC.BoxChartContainer>
        <SC.BoxTitle>
          {chart.title && (
            <SC.TypographyStyled>{chart.title}</SC.TypographyStyled>
          )}
        </SC.BoxTitle>
        {aditionalSetings && chart.chartConfig.data && (
          <AditionalSetings
            setFilter={setFilter}
            data={chart.chartConfig.data}
            aditionalSetings={aditionalSetings}
          />
        )}
        <TypeChart filter={filter} chartConfig={chart.chartConfig} />
      </SC.BoxChartContainer>
    </SC.CahrtConstructorWrapper>
  );
};
