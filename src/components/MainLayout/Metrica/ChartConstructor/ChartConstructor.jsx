import React, { useState, useEffect } from "react";
import ChartsGenetrators from "./ChartsGenetrators";
import * as SC from "./ChartConstructor.styled";
import { AditionalSetings } from "./AditionalSetings/AditionalSetings";

export const ChartConstructor = ({ chart, groupFilter }) => {
  const [filter, setFilter] = useState({});

  useEffect(() => {
    if (groupFilter) {
      setFilter(groupFilter);
    }
  }, [groupFilter]);

  if (!chart) {
    return null;
  }

  const TypeChart = ChartsGenetrators[chart?.type];
  return (
    <SC.CahrtConstructorWrapper>
      <SC.BoxChartContainer>
        <SC.BoxTitle>
          {chart.title && (
            <SC.TypographyStyled>{chart.title}</SC.TypographyStyled>
          )}
        </SC.BoxTitle>
        {chart.filterSelects && (
          <AditionalSetings
            setFilter={setFilter}
            aditionalSetings={{ filterSelects: chart.filterSelects }}
          />
        )}

        <TypeChart
          id={chart.id}
          options={chart.options}
          filter={filter}
          type={chart.type}
          filterSelects={chart.filterSelects}
          groupFilter={groupFilter}
        />
      </SC.BoxChartContainer>
    </SC.CahrtConstructorWrapper>
  );
};
