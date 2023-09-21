// answer form to send mail to user on his email

import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
// import { sendAnswer } from "redux/API/messagesApi";
import { LoaderSmall } from "components/MainLayout/Loader";
// import { useGetUserMsgQuery } from "redux/API/cabinetApi";

import * as SC from "./AnswerForm.styled";

const isLoading = false;

export const AnswerForm = ({ message, handleClose }) => {
  const dispatch = useDispatch();

  const onSubmit = (data) => {};

  return (
    <SC.AnswerFormContainer
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
      }}
    >
      <SC.AnswerForm>
        <SC.AnswerFormInput size="small" label="Тема" variant="outlined" />
        <SC.AnswerFormInput
          label="Повідомлення"
          multiline
          rows={4}
          variant="outlined"
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <SC.AnswerFormButton className="reverse" onClick={handleClose}>
            Відмінити
          </SC.AnswerFormButton>
          <SC.AnswerFormButton variant="contained" disabled={isLoading}>
            {isLoading ? <LoaderSmall /> : "Відправити"}
          </SC.AnswerFormButton>
        </Box>
      </SC.AnswerForm>
    </SC.AnswerFormContainer>
  );
};
