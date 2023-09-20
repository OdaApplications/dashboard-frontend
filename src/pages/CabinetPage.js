import React from "react";
import { Box } from "@mui/material";

import CabinetLayout from "components/MainLayout/Cabinet/CabinetLayout";

export const CabinetPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <CabinetLayout />
    </Box>
  );
};

export default CabinetPage;
