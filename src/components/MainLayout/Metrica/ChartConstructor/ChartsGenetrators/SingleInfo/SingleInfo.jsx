import React from "react";

import * as SC from "./SingleInfo.styled";

export const SingleInfo = ({ series, type, options }) => {
  if (!options) {
    return <div>no data</div>;
  }
  return (
    <SC.BoxSingleInfoStyled>
      <SC.TypographyTitleStyled>{options.text}</SC.TypographyTitleStyled>
      {typeof currentSeries === "string" ||
        (typeof currentSeries === "number" && (
          <SC.TypographySubTitleStyled>
            {series}
            {options.addText && ` ${options.addText}`}
          </SC.TypographySubTitleStyled>
        ))}
    </SC.BoxSingleInfoStyled>
  );
};
