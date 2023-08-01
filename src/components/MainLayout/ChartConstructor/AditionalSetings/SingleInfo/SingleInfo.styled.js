import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const SingleInfoWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  jaustifyContent: "flex-start",
}));

export const Title = styled("p")(({ theme }) => ({
  lineHeight: "1.334em",
  fontFamily: "Roboto, sans-serif",
  fontSize: "1rem",
  fontWeight: "500",
  color: "rgba(255, 255, 255, 0.5)",
}));

export const Value = styled("p")(({ theme }) => ({
  lineHeight: "1.334em",
  fontFamily: "Roboto, sans-serif",
  fontSize: "2.125rem",
  fontWeight: "500",
  color: "rgba(255, 255, 255, 1)",
}));
