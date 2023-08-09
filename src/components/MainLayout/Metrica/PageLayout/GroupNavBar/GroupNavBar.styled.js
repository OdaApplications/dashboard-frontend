import styled from "@emotion/styled";
import { Tabs, Tab, FormControl, Select, MenuItem } from "@mui/material";

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

// FormControl
// Select
// MenuItem
//styled empty

export const GroupNavFormControl = styled(FormControl)((props) => ({
  "& fieldset": {
    border: "none",
  },
  "& svg": {
    color: "#000",
  },
}));

export const GroupNavSelect = styled(Select)((props) => ({
  fontFamily: "e-Ukraine",
  fontSize: "16px",
  fontWeight: "500",
  color: "#000",
}));

export const GroupNavMenuItem = styled(MenuItem)((props) => ({
  fontFamily: "e-Ukraine",
  fontSize: "14px",
  fontWeight: "500",
  color: "#000",
}));
