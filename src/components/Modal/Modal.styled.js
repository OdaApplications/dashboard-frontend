import styled from "@emotion/styled";

export const ModalBackdrop = styled("div")((props) => ({
  padding: "50px 0",
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  overflowY: "scroll",
  backgroundColor: "rgba(17, 17, 17, 0.6)",
  backdropFilter: "blur(10px)",
  zIndex: "9999",
}));
