import React, { useState } from "react";
import { Refresh } from "@mui/icons-material";
import { Button } from "@mui/material";

export const RefreshBtn = ({ onClick, isFetching }) => {
  const [timeOut, setTimeOut] = useState(false);

  const handlerTimeOut = () => {
    setTimeOut(true);
    setTimeout(() => {
      setTimeOut(false);
    }, 1000);
  };

  return (
    <Button
      sx={{
        border: "3px solid #000",
        borderRadius: "12px",
        padding: "4px 4px",
        minWidth: "auto",
        color: "#000",
        justifySelf: "flex-start",
        mr: "auto",

        "&:hover": {
          backgroundColor: "#000",
          color: "#fff",
        },
      }}
      onClick={onClick ? onClick : handlerTimeOut}
    >
      <Refresh
        sx={{
          fontWeight: "bold",
          animation:
            isFetching || timeOut ? "rotate 1s linear infinite" : "none",
          color: "inherit",
        }}
      />
    </Button>
  );
};
