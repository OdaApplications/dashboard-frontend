import { Box, Typography } from "@mui/material";

export const MessageBox = ({ errorCode, text }) => {
  return (
    <Box
      sx={{
        margin: "auto",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "3px solid #000",
        borderRadius: "20px",
        width: { sm: "280px", lg: "400px" },
        height: { sm: "180px", lg: "300px" },
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
        padding: "20px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "e-Ukraine",
          fontSize: { sm: "28px", lg: "36px" },
          fontWeight: "regular",
          color: "#000",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {errorCode && <span>{errorCode}</span>}
        <span>{text}</span>
      </Typography>
    </Box>
  );
};
