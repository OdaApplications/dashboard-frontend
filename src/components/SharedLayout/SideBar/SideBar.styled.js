import { styled } from "@mui/material/styles";

import MuiDrawer from "@mui/material/Drawer";
// import MuiAppBar from "@mui/material/AppBar";

const drawerWidth = 280;

export const openedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "240px",
  },
});

export const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: 0,
  padding: 0,
  [theme.breakpoints.up("xl")]: {
    width: `calc(${theme.spacing(8)} + 41px)`,
    padding: "20px",
  },
});

export const closedMixinPaper = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: 0,
  [theme.breakpoints.up("xl")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

// export const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  position: "fixed",
  top: "0",
  left: "0",
  height: "100%",
  width: drawerWidth,
  paddingLeft: "20px",
  paddingRight: "20px",
  backgroundColor: "#fff",

  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  zIndex: "1200",

  "  & .MuiDrawer-paper": {
    position: "relative",
    border: 0,

    msOverflowStyle: "none",
    scrollbarWidth: "none",

    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixinPaper(theme),
  }),
  [theme.breakpoints.up("lg")]: {
    position: "relative",
  },
}));
