import styled from "@emotion/styled";

import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";

export const ModalMessagesWindow = styled("div")((props) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  height: "auto",
  padding: "64px 32px",

  background: "#fff",
  borderRadius: "20px",
}));

export const MenuButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: "14px",
  margin: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "6px",
  color: "#000",
  cursor: "pointer",
  borderRadius: "12px",
  overflow: "hidden",
  transition: "all 0.2s ease-in-out 0s",

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

export const ModalTitle = styled("h2")(({ theme }) => ({
  paddingBottom: "16px",
  color: "#000",
  fontFamily: "e-Ukraine",
  textAlign: "center",
  fontSize: "16px",
}));

export const SenderInfoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  padding: "16px 0",
}));

export const SenderTitle = styled("p")(({ theme }) => ({
  marginRight: "8px",
  display: "inline-block",
  color: "#000",
  fontFamily: "e-Ukraine",
}));

export const SenderLink = styled("a")(({ theme }) => ({
  color: "rgba(0, 0, 0, 0.5)",
  fontFamily: "e-Ukraine",
  textDecoration: "none",
}));

export const SenderText = styled("p")(({ theme }) => ({
  paddingTop: "24px",
  color: "#000",
  fontFamily: "e-Ukraine",
  fontSize: "14px",
  fontWeight: "300",
  textAlign: "justify",
  overflowWrap: "break-word",
}));

//AnswerButton
export const AnswerButton = styled("button")(({ theme }) => ({
  marginTop: "24px",
  padding: "8px 16px",
  color: "#fff",
  backgroundColor: "#000",
  borderRadius: "20px",
  border: "none",
  outline: "none",
  cursor: "pointer",

  display: "inline-flex",

  fontFamily: "e-Ukraine",
  fontSize: "14px",
  fontWeight: "500",
  textAlign: "center",

  transition: "all 0.2s ease-in-out 0s",

  "&:hover": {
    opacity: "0.7",
  },
}));

export const AnswerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
}));

export const AnswerTitle = styled(SenderText)(({ theme }) => ({}));

export const AnswerText = styled(SenderText)(({ theme }) => ({}));

export const Devider = styled("div")(({ theme }) => ({
  width: "100%",
  height: "2px",

  backgroundColor: "rgba(0, 0, 0, 0.2)",
  marginTop: "32px",
  marginBottom: "8px",
}));
