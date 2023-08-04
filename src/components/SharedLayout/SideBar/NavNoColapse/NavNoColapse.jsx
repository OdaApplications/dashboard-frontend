import { useNavigate } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export const NavNoColapse = ({
  id,
  icon,
  title,
  color,
  open,
  setOpen,
  children,
  url,
  navRoutes,
  setCurrentNav,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <ListItem key={id} disablePadding sx={{ display: "block", pt: 1, pb: 1 }}>
        <ListItemButton
          onClick={() => {
            if (!open) {
              setOpen(!open);
              return;
            }
            setCurrentNav(id);
            setOpen(!open);
            navigate(`${children ? children[0].url : url}`);
          }}
          sx={
            Object.values(navRoutes)[0] === id
              ? {
                  backgroundColor: color,
                  color: "#000",
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  borderRadius: "12px",
                  mr: 1,
                  ml: 1,

                  "& .MuiTypography-root": {
                    fontWeight: "600",
                  },
                }
              : {
                  outline: "3px solid #000",
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  borderRadius: "12px",
                  mr: 1,
                  ml: 1,
                }
          }
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 2 : "auto",
              justifyContent: "center",
              color: "#000",
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
    </>
  );
};
