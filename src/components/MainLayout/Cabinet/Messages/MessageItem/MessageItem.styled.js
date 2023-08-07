import styled from "@emotion/styled";

export const MessagesItem = styled("li")((props) => ({
  width: "100%",
  padding: "16px",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "20px",

  borderBottom: "3px solid #000",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.20)",
  cursor: "pointer",
  transition: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",

  "&:hover": {
    backgroundColor: "#55A5B7",
    color: "#fff",
    scale: "1.005",
  },
}));

export const MessagesTitle = styled("p")((props) => ({
  color: "#000",
  fontFamily: "e-Ukraine",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "normal",

  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
}));

export const MessagesDescription = styled("p")((props) => ({
  color: "rgba(0, 0, 0, 0.50)",
  fontFamily: "e-Ukraine",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "normal",
}));
