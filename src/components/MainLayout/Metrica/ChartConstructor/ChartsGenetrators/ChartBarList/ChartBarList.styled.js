import styled from "@emotion/styled";

import * as Base from "../ChartGenerators.styled";

export const BoxChartBarListStyled = styled(Base.BoxChartBarStyled)(
  (props) => ({
    height: "100%",
    padding: "3px",

    backgroundColor: "#fff",
    overflow: "hidden",
    borderRadius: "17px",
    m: "8px",
  })
);

export const ChartBarListStyled = styled(Base.ChartBarStyled)((props) => ({
  backgroundColor: "#fff",
  borderRadius: "20px",
}));
