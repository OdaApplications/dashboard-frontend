import React, { useState, useEffect } from "react";
import ChartsGenetrators from "./ChartsGenetrators";
import * as SC from "./ChartConstructor.styled";
import { AditionalSetings } from "./AditionalSetings/AditionalSetings";
import { useGetChartDataQuery } from "redux/API/chartApi";

export const ChartConstructor = ({ chart, groupFilter }) => {
  const [filter, setFilter] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (groupFilter) {
      setFilter(groupFilter);
    }
  }, [groupFilter]);

  const { currentData } = useGetChartDataQuery(chart?.id, { skip: !chart });

  useEffect(() => {
    if (currentData) {
      setChartData(currentData?.data.data);
    }
  }, [currentData]);

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
        {chart.filterSelects && currentData && (
          <AditionalSetings
            setFilter={setFilter}
            aditionalSetings={{ filterSelects: chart.filterSelects }}
          />
        )}
        {Object.keys(chartData).length > 0 && (
          <TypeChart
            options={chart.options}
            series={chartData}
            type={chart.type}
          />
        )}
      </SC.BoxChartContainer>
    </SC.CahrtConstructorWrapper>
  );
};
