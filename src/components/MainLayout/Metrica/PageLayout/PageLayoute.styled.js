import styled from "@emotion/styled";
import { Box, Tab, Tabs } from "@mui/material";

export const PageLayoutContainerStyled = styled(Box)((props) => ({
  width: "100%",
  backgroundColor: "transparent",
  borderRadius: "12px",
  position: "relative",
}));

export const PageLayoutTabs = styled(Tabs)((props) => ({
  "& .MuiTabs-indicator": {
    backgroundColor: "#B3E0EA",
    border: "3px solid #B3E0EA",
    height: "80%",
    top: "50%",
    transform: "translateY(-50%)",
    borderRadius: "12px",
  },
}));

export const PageLayoutTab = styled(Tab)((props) => ({
  fontFamily: "e-Ukraine",
  fontSize: "16px",
  fontWeight: "500",
  color: "#000",
  textTransform: "none",

  "&.Mui-selected": {
    color: "#000",
    zIndex: "3",
  },
}));
