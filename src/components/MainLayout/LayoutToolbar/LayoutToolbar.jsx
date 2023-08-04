import * as SC from "./LayoutToolbar.styled";

export const LayoutToolbar = ({ children }) => {
  return (
    <SC.LayoutToolBarContainerStyled>
      {children}
    </SC.LayoutToolBarContainerStyled>
  );
};
