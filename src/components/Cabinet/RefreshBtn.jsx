/// refresh button component for cabinet

import React from "react";
import { Refresh } from "@mui/icons-material";
import { Button } from "@mui/material";

export const RefreshBtn = ({ onClick, isFetching }) => {
  return (
    <Button
      sx={{
        border: "3px solid #000",
        borderRadius: "6px",
        padding: "4px 4px",
        minWidth: "auto",
        color: "#000",
        alignSelf: "flex-start",

        "&:hover": {
          backgroundColor: "#000",
          color: "#fff",
        },
      }}
      onClick={onClick}
    >
      <Refresh
        sx={{
          fontWeight: "bold",
          animation: isFetching ? "rotate 1s linear infinite" : "none",
          color: "inherit",
        }}
      />
    </Button>
  );
};
