import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const PageLayoutContainerStyled = styled(Box)((props) => ({
  width: "100%",
  backgroundColor: "transparent",
  borderRadius: "12px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  flexGrow: "1",
}));
