import styled from "@emotion/styled";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  width: 710px;

  gap: 32px;

  border: 3px solid #000;
  border-radius: 20px;

  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
`;

export const AuthTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 32px;
  font-family: e-Ukraine;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  gap: 32px;
`;

export const LoginInput = styled.input`
  font-family: e-Ukraine;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  width: 100%;
  padding: 8px 16px 8px 80px;
  border-radius: 20px;
  height: 56px;
  border: 3px solid #000;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
`;

export const LoginButton = styled.button`
  display: flex;
  width: 192px;
  padding: 16px;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-family: e-Ukraine;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  border-radius: 50px;
  background-color: #000;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
`;
