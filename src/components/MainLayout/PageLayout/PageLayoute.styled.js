import styled from "@emotion/styled";
import { Box, Tab, Tabs } from "@mui/material";

export const PageLayoutContainerStyled = styled(Box)((props) => ({
  width: "100%",
  backgroundColor: "transparent",
  borderRadius: "12px",
  position: "relative",
}));

export const PageLayoutTabsContainerStyled = styled(Box)((props) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
  borderRadius: "12px ",
  position: "relative",
  border: "3px solid #000",
  // borderTop: "none",
  // boxShadow: "0 0 10px 0 rgba(0,0,0,0.3)",
  mr: { lg: "32px" },
  ml: { lg: "32px" },
  marginBottom: "16px",
  left: "0",

  // top: "-20px",
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
