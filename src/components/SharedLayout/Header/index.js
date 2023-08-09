import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Toolbar, Fade } from "@mui/material";

import * as SC from "./Header.styled";

import { CurrentPageTitle } from "./CurrentPageTitle/CurrentPageTitle";

import { ProfileNav } from "./ProfileNav/ProfileNav";
import { useSelector } from "react-redux";
import { selectPerson } from "redux/person/personSlice";

export default function Header({ open, setOpen, subMenu }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const person = useSelector(selectPerson);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <SC.HeaderContainerStyled>
      <AppBar
        position="static"
        sx={{
          color: "#000",
          boxShadow: "none",
          backgroundColor: "#fff",
        }}
      >
        <Toolbar sx={{ p: "16px 32px", pr: { lg: "32px" } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: { xs: "row-reverse", lg: "row" },
              gap: 2,
            }}
          >
            <SC.LogoTypographyStyled
              variant="h6"
              noWrap
              edge="start"
              component="div"
              sx={{ display: { xs: `${open ? "flex" : "none"}`, lg: "flex" } }}
              onClick={() =>
                navigate(`${person === "cabinet" ? "/cabinet" : "/"}`)
              }
            >
              АНАЛІТИКА
            </SC.LogoTypographyStyled>
            <SC.MenuButton
              size="medium"
              aria-label="open drawer"
              sx={{ mr: 1 }}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <Fade in={open}>
                  <SC.MenuCloseIcon />
                </Fade>
              ) : (
                <Fade in={!open}>
                  <SC.MenuOpenIcon />
                </Fade>
              )}
            </SC.MenuButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <CurrentPageTitle open={open} subMenu={subMenu} />
          <Box sx={{ flexGrow: 1 }} />
          {person === "cabinet" && (
            <ProfileNav
              menuId={menuId}
              mobileMenuId={mobileMenuId}
              handleProfileMenuOpen={handleProfileMenuOpen}
              anchorEl={anchorEl}
              handleMobileMenuClose={handleMobileMenuClose}
            />
          )}
        </Toolbar>
      </AppBar>
    </SC.HeaderContainerStyled>
  );
}
