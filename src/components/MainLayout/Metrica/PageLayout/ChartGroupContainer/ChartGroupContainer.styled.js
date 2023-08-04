import styled from "@emotion/styled";
import { Box, Typography, Switch } from "@mui/material";

export const BoxChartContainerStyled = styled(Box)((props) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  borderRadius: "12px",
  border: "3px solid #000",
  backgroundColor: "#fff",
  // borderTop: "3px doted #000",
  // borderBottom: "3px doted #000",
  overflow: "hidden",
}));

export const BoxTitleContainerStyled = styled(Box)((props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // backgroundColor: "#fff",
  borderRadius: "12px 12px 0 0",
  padding: "10px",
}));

export const BoxSubTitleContainerStyled = styled(Box)((props) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  pt: "12px",
  pb: "8px",
  backgroundColor: "#fff",
  // boxShadow: "inset 0 10px 10px -10px rgba(0,0,0,0.4)",
}));

export const TitleStyled = styled(Typography)((props) => ({
  fontFamily: "e-Ukraine",
  fontSize: "16px",
  fontWeight: "500",
  flexGrow: "2",
}));

export const OnOffSwitch = styled(Switch)((theme) => ({
  padding: 8,
  "& .MuiSwitch-switchBase": {
    color: "#000",
  },

  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    opacity: 1,
    backgroundColor: "#fff",
    outline: "3px solid #000",

    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        "#000"
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
  "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "rgba(85, 165, 183, 0.4)",
    outline: "3px solid #55A5B7",
  },
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#55A5B7",

    "&:hover": {
      backgroundColor: "rgba(85, 165, 183, 0.04)",
    },
  },
}));
