import React from "react";
import { Box } from "@mui/material";
import * as SC from "./GroupNavBar.styled";

export const GroupNavBar = ({
  isSmallScreen,
  handleChange,
  value,
  navigate,
  subNav,
}) => {
  return !isSmallScreen ? (
    <Box sx={{ maxWidth: "100%" }}>
      <SC.PageLayoutTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {subNav.map((item) => (
          <SC.PageLayoutTab
            key={item?.id}
            label={item?.title}
            onClick={() => navigate(item?.url)}
          />
        ))}
      </SC.PageLayoutTabs>
    </Box>
  ) : (
    <SC.GroupNavFormControl sx={{ minWidth: 120 }}>
      <SC.GroupNavSelect
        value={value}
        size="small"
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        {subNav.map((item, index) => (
          <SC.GroupNavMenuItem
            key={item?.id}
            value={index}
            onClick={() => navigate(item?.url)}
          >
            {item?.title}
          </SC.GroupNavMenuItem>
        ))}
      </SC.GroupNavSelect>
    </SC.GroupNavFormControl>
  );
};
