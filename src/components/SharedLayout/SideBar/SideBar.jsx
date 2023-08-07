import * as React from "react";
import { useParams } from "react-router-dom";
import { NavList } from "./NavList/NavList";

import { Box, Divider } from "@mui/material";

import * as SC from "./SideBar.styled";

import { mainPages, mainPagesCabinet } from "pagesConfig";

export default function MiniDrawer({ person, open, setOpen, subMenu }) {
  const params = useParams();

  return (
    <SC.Drawer
      variant="permanent"
      open={open}
      sx={{ paddingTop: { sm: "86px", lg: "0px" } }}
    >
      <Box>
        <NavList
          open={open}
          setOpen={setOpen}
          navRoutes={params}
          subMenu={person === "cabinet" ? mainPagesCabinet : mainPages}
        />

        <Divider
          sx={{
            height: "3px",
            backgroundColor: "#000",
            borderRadius: "20px",
            margin: "10px 0px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        />

        <NavList
          open={open}
          setOpen={setOpen}
          navRoutes={params}
          subMenu={subMenu}
        />
      </Box>
    </SC.Drawer>
  );
}
