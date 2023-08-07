import styled from "@emotion/styled";

import * as Base from "../ChartGenerators.styled";

export const BoxDonutStyled = styled(Base.BoxChartBarStyled)((props) => ({
  height: "100%",
  padding: "3px",

  backgroundColor: "#fff",
  borderRadius: "17px",
}));

export const DonutBarStyled = styled(Base.ChartBarStyled)((props) => ({
  backgroundColor: "#fff",
  borderRadius: "20px",
}));
