import React from "react";
import { Login } from "components/Auth/Login";
import { Box } from "@mui/material";

export const Auth = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: "20px",
      }}
    >
      <Login />
    </Box>
  );
};

export default Auth;
