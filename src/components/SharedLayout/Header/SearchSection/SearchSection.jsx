import SearchIcon from "@mui/icons-material/Search";
import * as SC from "../Header.styled";

export const SearchSection = () => {
  return (
    <SC.Search sx={{ display: { xs: "none", lg: "block" } }}>
      <SC.SearchIconWrapper>
        <SearchIcon />
      </SC.SearchIconWrapper>
      <SC.StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </SC.Search>
  );
};
