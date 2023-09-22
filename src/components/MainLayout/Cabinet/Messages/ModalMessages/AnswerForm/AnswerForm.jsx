// answer form to send mail to user on his email

import React from "react";
import { Box } from "@mui/material";
// import { sendAnswer } from "redux/API/messagesApi";
import { LoaderSmall } from "components/MainLayout/Loader";
import { useSendAnswerMutation } from "redux/API/cabinetApi";
import { useFormik } from "formik";

import * as SC from "./AnswerForm.styled";

export const AnswerForm = ({ id, handleClose, setAnswer }) => {
  const [sendAnswer, { isLoading }] = useSendAnswerMutation();

  const onSubmit = async (data) => {
    try {
      await sendAnswer({ id, ...data });
      setAnswer(data.text);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      text: "",
    },
    onSubmit,
  });

  return (
    <SC.AnswerFormContainer
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
      }}
    >
      <SC.AnswerForm onSubmit={formik.handleSubmit}>
        <SC.AnswerFormInput
          size="small"
          label="Тема"
          variant="outlined"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          required
        />
        <SC.AnswerFormInput
          label="Повідомлення"
          multiline
          rows={4}
          variant="outlined"
          name="text"
          value={formik.values.text}
          onChange={formik.handleChange}
          required
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <SC.AnswerFormButton
            className="reverse"
            disabled={isLoading}
            onClick={handleClose}
          >
            Відмінити
          </SC.AnswerFormButton>
          <SC.AnswerFormButton
            type="submit"
            variant="contained"
            disabled={isLoading}
          >
            {isLoading ? <LoaderSmall size={"28px"} /> : "Відправити"}
          </SC.AnswerFormButton>
        </Box>
      </SC.AnswerForm>
    </SC.AnswerFormContainer>
  );
};
