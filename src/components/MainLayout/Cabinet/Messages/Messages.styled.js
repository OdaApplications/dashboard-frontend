import styled from "@emotion/styled";
import { Box, TablePagination } from "@mui/material";

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

export const StyledPagination = styled(TablePagination)((props) => ({
  color: "rgba(0, 0, 0, 0.50)",
  fontFamily: "e-Ukraine",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "normal",

  "& .MuiInputBase-root": {
    "@media (max-width: 600px)": {
      display: "none",
    },
  },

  "& .MuiTablePagination-selectLabel": {
    fontFamily: "e-Ukraine",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",

    "@media (max-width: 600px)": {
      display: "none",
    },
  },

  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
    color: "#000",
    fontFamily: "e-Ukraine",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
  },

  "& .MuiTablePagination-displayedRows": {
    fontFamily: "e-Ukraine",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
  },
}));
