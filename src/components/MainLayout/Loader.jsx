import { Typography, Box, CircularProgress } from "@mui/material";
import styled from "@emotion/styled";

export const LoaderBig = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#fff",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 99999999,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          borderRadius: "20px",
          backgroundColor: "#000",
          padding: "4px",
          width: "300px",
          height: "90px",

          "&::before": {
            content: '""',
            display: "block",
            width: "80px",
            height: "80px",
            position: "absolute",
            zIndex: 98,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",

            top: "0%",
            left: "0%",
            animation: "loaderB 3s infinite linear",

            backgroundColor: "#fff",
          },

          "&::after": {
            content: '""',
            display: "block",
            width: "80px",
            height: "80px",
            position: "absolute",
            zIndex: 98,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",

            top: "100%",
            left: "100%",
            animation: "loaderA 3s infinite linear",

            backgroundColor: "#fff",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            position: "relative",

            backgroundColor: "#fff",
            borderRadius: "16px",
            zIndex: 99,
          }}
        >
          <Typography
            sx={{
              color: "#000",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            METRICA
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const LoaderSmallStyled = styled(CircularProgress)`
  color: inherit;
`;

export const LoaderSmall = ({ size, thickness }) => {
  return <LoaderSmallStyled size={size} thickness={thickness} />;
};
