import * as SC from "./SingleInfo.styled";

export const SingleInfo = ({ singleInfo }) => {
  const { value, title } = singleInfo;
  return (
    <SC.SingleInfoWrapper>
      <SC.Value>{value}</SC.Value>
      <SC.Title>{title}</SC.Title>
    </SC.SingleInfoWrapper>
  );
};
