import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import * as Base from "../ChartGenerators.styled";

export const BoxSingleInfoStyled = styled(Base.BoxChartBarStyled)((props) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  padding: "3px",

  backgroundColor: "#fff",
  borderRadius: "17px",
}));

export const TypographyTitleStyled = styled(Typography)((props) => ({
  fontFamily: "e-Ukraine",
  fontSize: "24px",
  textAlign: "center",
  color: "#000",
}));

export const TypographySubTitleStyled = styled(Typography)((props) => ({
  fontFamily: "e-Ukraine",
  fontSize: "26px",
  textAlign: "center",
  color: "#000",
}));
