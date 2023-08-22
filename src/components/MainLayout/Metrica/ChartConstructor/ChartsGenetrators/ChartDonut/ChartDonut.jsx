import React from "react";
import * as SC from "./ChartDonut.styled";
import { labelDonutFormaterFunc } from "components/helpers";

export const ChartDonut = ({ options, series, type }) => {
  if (series.length === 0) {
    return <div>no data</div>;
  }

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
};
