import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const BoxChartContainer = styled(Box)((props) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  zIndex: "5",
}));

export const BoxTitle = styled(Box)((props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "6px",
  minHeight: "35px",
}));

export const TypographyStyled = styled(Typography)((props) => ({
  color: "#000",
  fontFamily: "e-Ukraine",
  fontSize: `${props.children.length > 50 ? "12px" : "14px"}`,
  fontWeight: "500",
  textAlign: "center",
}));

// const before = {
//   content: "''",
//   backgroundAttachment: "scroll",
//   backgroundClip: "border-box",
//   backgroundColor: "rgb(69, 39, 160)",
//   backgroundImage: "none",
//   backgroundOrigin: "padding-box",
//   backgroundPositionX: "0%",
//   backgroundPositionY: "0%",
//   backgroundRepeatX: "repeat",
//   backgroundRepeatY: "repeat",
//   backgroundSize: "auto",
//   borderBottomLeftRadius: "50%",
//   borderBottomRightRadius: "50%",
//   borderTopLeftRadius: "50%",
//   borderTopRightRadius: "50%",
//   boxSizing: "border-box",
//   color: "rgb(255, 255, 255)",
//   display: "block",
//   fontFamily: "Roboto, sans-serif",
//   fontSize: "14px",
//   fontWeight: "400",
//   height: "210px",
//   lineHeight: "18.676px",
//   opacity: "0.5",
//   position: "absolute",
//   right: "-15px",
//   top: "-125px",
//   width: "210px",
// };

// const after = {
//   backgroundAttachment: "scroll",
//   backgroundClip: "border-box",
//   backgroundColor: "rgb(69, 39, 160)",
//   backgroundImage: "none",
//   backgroundOrigin: "padding-box",
//   backgroundPositionX: "0%",
//   backgroundPositionY: "0%",
//   backgroundRepeatX: "repeat",
//   backgroundRepeatY: "repeat",
//   backgroundSize: "auto",
//   borderBottomLeftRadius: "50%",
//   borderBottomRightRadius: "50%",
//   borderTopLeftRadius: "50%",
//   borderTopRightRadius: "50%",
//   boxSizing: "border-box",
//   color: "rgb(255, 255, 255)",
//   content: "''",
//   display: "block",
//   fontFamily: "Roboto, sans-serif",
//   fontSize: "14px",
//   fontWeight: "400",
//   height: "210px",
//   lineHeight: "18.676px",
//   position: "absolute",
//   right: "-95px",
//   textSizeAdjust: "100%",
//   top: "-85px",
//   width: "210px",
//   webkitFontSmoothing: "antialiased",
//   zIndex: "1",
// };

export const CahrtConstructorWrapper = styled(Box)((props) => ({
  width: "100%",
  height: "100%",
  padding: "0px 12px 12px 12px",
  // paddingTop: "6px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#B3E0EA",
  borderRadius: "20px",
  overflow: "hidden",
  position: "relative",
  // "&::before": before,
  // "&::after": after,
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
