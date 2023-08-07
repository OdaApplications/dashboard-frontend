import { Box, Typography, useMediaQuery } from "@mui/material";
import * as SC from "./ChartGroupContainer/ChartGroupContainer.styled";

export const DNDSwitch = ({ isDragable, setIsDragable }) => {
  const isSmallScreen = useMediaQuery("(max-width: 899px)");

  return (
    <Box
      sx={{
        display: isSmallScreen ? "none" : "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "e-Ukraine",
          fontWeight: "500",
          fontSize: "14px",
        }}
      >
        Перетягувавння
      </Typography>
      <SC.OnOffSwitch
        checked={isDragable}
        onChange={() => setIsDragable(!isDragable)}
      />
    </Box>
  );
};
