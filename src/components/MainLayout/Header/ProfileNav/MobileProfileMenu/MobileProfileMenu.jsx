import React from "react";
import {
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
} from "@mui/material";

import { Logout, MoreVert, AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "redux/auth/authAPI";

export const MobileProfileMenu = ({ mobileMenuId }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = async () => {
    try {
      await logout();
      handleClose();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const ProfileLinKHandler = () => {
    handleClose();
    navigate("/cabinet/messages/all");
  };

  return (
    <React.Fragment>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={open ? mobileMenuId : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          color="inherit"
        >
          <MoreVert />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id={mobileMenuId}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            borderRadius: "20px",
            padding: "8px",
            mt: 1.5,
            "& .MuiListItemIcon-root": {
              minWidth: "auto",
              marginRight: "16px",
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          sx={{
            fontFamily: "e-Ukraine",
            fontWeight: "regular",
            fontSize: "16px",
            color: "#000",
          }}
          onClick={ProfileLinKHandler}
        >
          <ListItemIcon>
            <AccountCircle sx={{ fontSize: "20px", color: "#000" }} />
          </ListItemIcon>
          Особистий кабінет
        </MenuItem>
        <Divider
          sx={{
            height: "3px",
            backgroundColor: "#000",
            mr: "16px",
            ml: "16px",
          }}
        />
        <MenuItem
          sx={{
            fontFamily: "e-Ukraine",
            fontWeight: "regular",
            fontSize: "16px",
            color: "#000",
          }}
          onClick={logoutHandler}
        >
          <ListItemIcon>
            <Logout
              sx={{ fontSize: "20px", fontWeight: "700", color: "#000" }}
            />
          </ListItemIcon>
          Вихід
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};
