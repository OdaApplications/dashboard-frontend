import { useEffect, useState } from "react";
// import { Suspense } from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar/SideBar";
import { setPerson } from "redux/person/personSlice";
import { useDispatch } from "react-redux";

const SharedLayout = ({ person, children }) => {
  const [open, setOpen] = useState(false);
  const [subMenu, setSubMenu] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPerson(person));
  }, [dispatch, person]);

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Header open={open} setOpen={setOpen} subMenu={subMenu} />
      <Box
        sx={{
          display: "flex",
          position: "relative",
          height: "calc(100% - 86px)",
        }}
      >
        <SideBar
          person={person}
          open={open}
          setOpen={setOpen}
          subMenu={subMenu}
        />
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            overflowY: "scroll",
          }}
        >
          <Box
            component="main"
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              height: "max-content",
              minHeight: "100%",
              padding: {
                xs: "8px",
                lg: ` ${open ? "13px 20px 20px 0" : "13px 20px 20px 20px"}`,
                xl: "13px 20px 20px 0",
              },
              // marginRight: { xl: "16px" },
              borderRadius: { lg: "12px" },
              borderBottomLeftRadius: "0",
              borderBottomRightRadius: "0",
              overflow: "hidden",
            }}
          >
            <Outlet context={[setSubMenu]} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SharedLayout;
