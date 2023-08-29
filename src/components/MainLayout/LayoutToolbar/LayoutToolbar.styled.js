import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const LayoutToolBarContainerStyled = styled(Box)((props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
  borderRadius: "12px ",
  position: "relative",
  border: "3px solid #000",
  paddingLeft: "12px",
  paddingRight: "12px",
  minHeight: "54px",
  width: "100%",

  mr: { lg: "32px" },
  ml: { lg: "32px" },
  left: "0",
}));
