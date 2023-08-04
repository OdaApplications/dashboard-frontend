// import { PanoramaWideAngleSelectSharp } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const CurrentPageTitle = ({ open, subMenu }) => {
  const [currentPage, setCurrentPage] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let title = "";
    let prevPage = subMenu;

    for (let i = 0; Object.keys(params).length - 1; i += 1) {
      prevPage = Array.isArray(prevPage)
        ? prevPage?.find((elem) => elem.id === Object.values(params)[i])
        : prevPage?.children?.find(
            (elem) => elem.id === Object.values(params)[i]
          );
      if (!prevPage) {
        title = "404";
        // navigate("/404");
        return;
      } else {
        title = prevPage.title;
      }
      if (prevPage && i === Object.keys(params).length - 1)
        setCurrentPage(title);
    }
  }, [navigate, params, subMenu]);

  return (
    <Box sx={{ display: { xs: `${open ? "none" : "block"}`, lg: "block" } }}>
      <Typography
        sx={{
          fontFamily: "e-Ukraine",
          fontWeight: "700",
          fontSize: { sm: "16px", lg: "20px" },
          textAlign: "center",
          color: "#000",
        }}
      >
        {currentPage}
      </Typography>
    </Box>
  );
};
