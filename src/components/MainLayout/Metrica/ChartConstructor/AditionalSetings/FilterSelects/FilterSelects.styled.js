import styled from "@emotion/styled";

export const FilterSelectsList = styled("ul")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "8px",
}));

export const FilterSelectsItem = styled("li")(({ theme }) => ({
  color: "rgba(255, 255, 255, 1)",
}));
