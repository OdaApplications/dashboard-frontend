import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography } from "@mui/material";

export const HeaderContainerStyled = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  height: "86px",
  display: "flex",
  alignItems: "center",
  position: "relative",
  zIndex: 1201,
}));

export const LogoTypographyStyled = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  alignItems: "flex-end",
  mr: 0,

  fontFamily: "e-Ukraine Head",
  fontSize: "20px",
  fontWeight: 500,
  letterSpacing: "2px",
  textTransform: "uppercase",
}));

export const Search = styled(Box)(({ theme }) => ({
  position: "relative",
  border: "1px solid rgba(0, 0, 0, 0.2)",
  backgroundColor: "#f8fafc",
  borderRadius: "12px",
  width: "250px",

  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    borderColor: "rgba(0, 0, 0, 0.87)",
  },

  "&:focus-within": {
    backgroundColor: "#fff",
    borderColor: "#5e35b1",
    color: "#5e35b1",
  },

  marginRight: theme.spacing(2),
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: "15.5px 14px 15.5px 4px",
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "1.4375em",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "6px",
  color: "#000",
  cursor: "pointer",
  borderRadius: "6px",
  overflow: "hidden",
  transition: "all 0.2s ease-in-out 0s",
  border: "3px solid #000",

  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.027)",
  },
}));

export const MenuOpenIcon = styled(MenuIcon)(({ theme }) => ({
  color: "#000",
  fontSize: "1.2rem",
}));
export const MenuCloseIcon = styled(CloseIcon)(({ theme }) => ({
  color: "#000",
  fontSize: "1.2rem",
}));
