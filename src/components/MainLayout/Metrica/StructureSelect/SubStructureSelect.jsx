import React, { useEffect } from "react";
import { Box, AppBar, Tabs, Tab, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export const SubStructureSelect = ({ structure, pages }) => {
  const theme = useTheme();
  const [tabs, setTubs] = React.useState([]);
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    const index = pages.findIndex((item) => item.page === structure);
    setValue(0);
    setTubs(pages[index].tabs);
  }, [pages, structure]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {tabs.map((item, index) => (
            <Tab label={item} {...a11yProps(index)} />
          ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {tabs.map((item, index) => (
          <TabPanel value={value} index={index} dir={theme.direction}>
            {item}
          </TabPanel>
        ))}
      </SwipeableViews>
    </Box>
  );
};
