import React, { useEffect, useState } from "react";

import * as SC from "./SingleInfo.styled";

export const SingleInfo = ({ chartConfig, filter }) => {
  const [currentSeries, setCurrentSeries] = useState([]);

  useEffect(() => {
    if (chartConfig?.series) {
      setCurrentSeries(chartConfig.series);
    }
    if (chartConfig?.data) {
      let newSeries = chartConfig.data;

      for (const elem of filter) {
        if (newSeries) {
          if (elem === "") {
            newSeries = newSeries[Object.keys(newSeries)[0]];
          } else {
            newSeries = newSeries[elem];
          }
        }
      }

      setCurrentSeries(newSeries);
    }
  }, [chartConfig, filter]);

  if (!chartConfig.options) {
    return <div>no data</div>;
  }
  return (
    <SC.BoxSingleInfoStyled>
      <SC.TypographyTitleStyled>
        {chartConfig.options.text}
      </SC.TypographyTitleStyled>
      {typeof currentSeries === "string" ||
        (typeof currentSeries === "number" && (
          <SC.TypographySubTitleStyled>
            {currentSeries}
            {chartConfig.options.addText && ` ${chartConfig.options.addText}`}
          </SC.TypographySubTitleStyled>
        ))}
    </SC.BoxSingleInfoStyled>
  );
};
