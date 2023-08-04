import React, { useState } from "react";
import List from "@mui/material/List";

import { NavColapse } from "../NavColapse/NavColapse";
import { NavNoColapse } from "../NavNoColapse/NavNoColapse";

export const NavList = ({ open, setOpen, navRoutes, subMenu }) => {
  const [currentNav, setCurrentNav] = useState("");

  if (subMenu)
    return (
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          // padding: "12px 0px 12px 20px",
        }}
      >
        {subMenu.map(({ id, color, menuTitle, type, icon, children, url }) =>
          type === "collapse" ? (
            <NavColapse
              key={id}
              id={id}
              title={menuTitle}
              icon={icon}
              color={color}
              navRoutes={navRoutes}
              sidebarOpen={open}
              setSidebarOpen={setOpen}
              children={children}
              currentNav={currentNav}
              url={url}
              setCurrentNav={setCurrentNav}
            />
          ) : (
            <NavNoColapse
              key={id}
              id={id}
              title={menuTitle}
              color={color}
              icon={icon}
              open={open}
              setOpen={setOpen}
              navRoutes={navRoutes}
              url={url}
              children={children}
              setCurrentNav={setCurrentNav}
            />
          )
        )}
      </List>
    );
};
