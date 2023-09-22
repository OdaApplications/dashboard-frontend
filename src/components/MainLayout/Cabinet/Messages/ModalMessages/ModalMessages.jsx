import { dateTransformer } from "components/helpers";
import { Box, useMediaQuery } from "@mui/material";
import * as SC from "./ModalMessages.styled";

import { AnswerForm } from "./AnswerForm/AnswerForm";
import { useEffect, useState } from "react";

const ModalMessages = ({ message, onClose }) => {
  const [isAnswerForm, setIsAnswerForm] = useState(false);
  const [answer, setAnswer] = useState("");

  const {
    title,
    text,
    senderName,
    senderEmail,
    recieverName,
    createdAt,
    textAnswer,
    id,
  } = message;

  useEffect(() => {
    if (textAnswer) {
      setAnswer(textAnswer);
    }
  }, [textAnswer]);

  const isSmallScreen = useMediaQuery("(max-width: 767px)");

  const openAnswer = () => {
    setIsAnswerForm(true);
  };

  const closeAnswer = () => {
    setIsAnswerForm(false);
  };

  return (
    <SC.ModalMessagesWindow
      style={{
        width: isSmallScreen ? "300px" : "704px",
        padding: isSmallScreen ? "40px 20px 20px 20px" : "64px 32px",
      }}
    >
      <SC.MenuButton
        style={{ top: isSmallScreen ? "12px" : "20px" }}
        onClick={onClose}
      >
        <SC.MenuCloseIcon />
      </SC.MenuButton>
      <SC.ModalTitle style={{ fontSize: isSmallScreen ? "12px" : "14px" }}>
        {title}
      </SC.ModalTitle>
      <SC.SenderInfoBox>
        <Box>
          <SC.SenderTitle style={{ fontSize: isSmallScreen ? "12px" : "14px" }}>
            Від: {senderName}
          </SC.SenderTitle>
          <SC.SenderLink
            href={`mailto:${senderEmail}`}
            style={{ fontSize: isSmallScreen ? "12px" : "14px" }}
          >
            &#60;{senderEmail}&#62;
          </SC.SenderLink>
        </Box>

        <p
          style={{
            color: "#000",
            fontFamily: "e-Ukraine",
            fontSize: isSmallScreen ? "12px" : "14px",
          }}
        >
          {dateTransformer(createdAt)}
        </p>
      </SC.SenderInfoBox>
      {recieverName && (
        <SC.SenderTitle style={{ fontSize: isSmallScreen ? "12px" : "14px" }}>
          Депутату: {recieverName}
        </SC.SenderTitle>
      )}
      <div>
        <SC.SenderText style={{ fontSize: isSmallScreen ? "12px" : "14px" }}>
          {text}
        </SC.SenderText>
      </div>
      {!isAnswerForm && answer.length === 0 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
          <SC.AnswerButton onClick={openAnswer}>Відповісти</SC.AnswerButton>
        </Box>
      )}
      {isAnswerForm && answer.length === 0 && (
        <AnswerForm id={id} handleClose={closeAnswer} setAnswer={setAnswer} />
      )}
      {answer.length > 0 && (
        <>
          <SC.Devider></SC.Devider>
          <SC.AnswerBox>
            <SC.AnswerTitle>Відповідь:</SC.AnswerTitle>
            <SC.AnswerText>{answer}</SC.AnswerText>
          </SC.AnswerBox>
        </>
      )}
    </SC.ModalMessagesWindow>
  );
};

export default ModalMessages;
