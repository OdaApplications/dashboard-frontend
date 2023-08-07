import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const MessagesContainer = styled(Box)((props) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "3px solid #000",
  borderRadius: "12px",
  padding: "12px 20px",
  gap: "12px",

  overflowY: "scroll",

  msOverflowStyle: "none",
  scrollbarWidth: "none",

  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

export const MessagesList = styled("ul")((props) => ({
  width: "100%",
  height: "75vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0",
}));
