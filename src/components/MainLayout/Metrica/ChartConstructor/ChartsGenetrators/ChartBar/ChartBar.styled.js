import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Chart from "react-apexcharts";

export const BoxChartBarStyled = styled(Box)((props) => ({
  height: "100%",
  padding: "3px ",
  border: "3px solid #000",

  backgroundColor: "#fff",
  borderRadius: "17px",
}));

export const ChartBarStyled = styled(Chart)((props) => ({
  backgroundColor: "#fff",
  borderRadius: "20px",
}));

export const NoDataMessage = styled(Typography)((props) => ({
  fontFamily: "e-Ukraine",
  fontSize: "20px",
  color: "#000",
  textAlign: "center",
}));