import * as SC from "./ProfileNav.styled";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { UserProfile } from "components/MainLayout/Header/ProfileNav/UserProfile/UserProfile";
import { useSelector } from "react-redux";
import { Login } from "@mui/icons-material";
import { MobileProfileMenu } from "./MobileProfileMenu/MobileProfileMenu";

export const ProfileNav = ({
  menuId,
  mobileMenuId,
  handleProfileMenuOpen,
  anchorEl,
  handleMobileMenuClose,
}) => {
  const isLogin = Boolean(useSelector((state) => state.auth.token));
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const open = Boolean(anchorEl);

  if (!isLogin)
    return (
      <>
        <Box>
          <SC.LoginBtn href="/login" underline="none">
            {isMobile ? <Login sx={{ fontSize: "20px" }} /> : "Вхід"}
          </SC.LoginBtn>
        </Box>
      </>
    );

  if (isLogin)
    return (
      <>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <SC.ProfileLink href="/cabinet/messages/all" underline="hover">
            Особистий кабінет
          </SC.ProfileLink>
          <IconButton
            aria-describedby={"user-profile-button"}
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={open ? menuId : undefined}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            sx={{ mr: "0" }}
          >
            <AccountCircle />
          </IconButton>
        </Box>
        <MobileProfileMenu
          handleProfileMenuOpen={handleProfileMenuOpen}
          anchorEl={anchorEl}
          mobileMenuId={mobileMenuId}
          handleMobileMenuClose={handleMobileMenuClose}
        />
        <UserProfile
          id={"user-profile-button"}
          anchorEl={anchorEl}
          openUserProfile={handleProfileMenuOpen}
          closeUserProfile={handleMobileMenuClose}
        />
      </>
    );
};
