import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const MessagesContainer = styled(Box)((props) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  overflow: "hidden",
  // overflowY: "scroll",
}));

export const MessagesList = styled("ul")((props) => ({
  width: "100%",
  height: "75vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  margin: "0",
  borderRadius: "12px",
  border: "3px solid #000",
}));
