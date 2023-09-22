import { Box, Button, TextField } from "@mui/material";
import styled from "@emotion/styled";

export const AnswerFormContainer = styled(Box)(({ theme }) => ({
  marginTop: "40px",
  padding: "32px 24px",

  border: "3px solid #000",
  borderRadius: "12px",
}));

export const AnswerForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

export const AnswerFormInput = styled(TextField)(({ theme }) => ({
  // border: "3px solid #000",

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#000",
      borderWidth: "2px",

      borderRadius: "12px",
    },
    "&:hover fieldset": {
      borderColor: "#000",
      borderWidth: "3px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#000",
      borderWidth: "3px",
    },
  },

  "& .MuiOutlinedInput-input": {
    padding: "12px 14px",
    fontSize: "13px",
    fontWeight: 300,
    lineHeight: "16px",
    color: "#000",
    fontFamily: "e-Ukraine",
  },

  "& .MuiInputLabel-outlined": {
    color: "#000",
  },

  "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
    transform: "translate(14px, -6px) scale(0.75)",
  },

  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#000",
    borderWidth: "3px",
  },

  "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: "#f44336",
    borderWidth: "3px",
  },
}));

export const AnswerFormButton = styled(Button)(({ theme }) => ({
  marginTop: "24px",
  padding: "8px 16px",
  minWidth: "120px",
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

  textTransform: "none",

  transition: "all 0.2s ease-in-out 0s",

  "&.reverse": {
    border: "3px solid #000",
    backgroundColor: "#fff",
    color: "#000",
  },

  "&:hover": {
    backgroundColor: "#000",
    opacity: "0.7",
  },

  "&.reverse:hover": {
    backgroundColor: "#000",
    opacity: "1",
    color: "#fff",
  },

  "&.Mui-disabled": {
    //grey
    backgroundColor: "#000",
    color: "#fff",
    opacity: "0.5",
  },
}));
