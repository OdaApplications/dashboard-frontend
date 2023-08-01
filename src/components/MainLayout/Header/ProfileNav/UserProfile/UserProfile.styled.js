import styled from "@emotion/styled";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 400px;
  padding: 26px 18px;
  gap: 32px;

  background-color: #aae3e3;
  border: 3px solid #000000;
  border-radius: 20px;
`;

export const UserName = styled.h2`
  font-family: "e-Ukraine";
  font-weight: 700;
  font-size: 20px;
  line-height: normal;
  color: #000000;
`;

export const UserPosition = styled.p`
  font-family: "e-Ukraine";
  font-weight: 400;
  font-size: 16px;
  line-height: normal;
  color: #000000;
`;

export const UserInfoWrapper = styled.li`
  position: relative;
  display: flex;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  &::before {
    content: "";
    position: absolute;
    height: 3px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: #000000;
  }
`;

export const InfoLabel = styled.p`
  flex-basis: 30%;
  font-family: "e-Ukraine";
  font-weight: 400;
  font-size: 14px;
  line-height: normal;
  color: rgba(0, 0, 0, 0.5);
`;

export const InfoText = styled.p`
  flex-basis: 70%;
  font-family: "e-Ukraine";
  font-weight: 400;
  font-size: 14px;
  line-height: normal;
  color: rgb(0, 0, 0);
`;

export const LogoutButton = styled.button`
  height: 40px;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "e-Ukraine";
  font-weight: 400;
  font-size: 14px;
  line-height: normal;
  color: #000000;
  text-align: center;

  border: 3px solid #000000;
  border-radius: 20px;

  background-color: transparent;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;
