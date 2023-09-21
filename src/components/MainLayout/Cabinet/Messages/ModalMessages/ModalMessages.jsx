import { dateTransformer } from "components/helpers";
import { Box, useMediaQuery } from "@mui/material";
import * as SC from "./ModalMessages.styled";
import { display } from "styled-system";
import { AnswerForm } from "./AnswerForm/AnswerForm";
import { useState } from "react";

const ModalMessages = ({ message, onClose }) => {
  const [isAnswerForm, setIsAnswerForm] = useState(false);

  const { title, text, senderName, senderEmail, recieverName, createdAt } =
    message;

  const isSmallScreen = useMediaQuery("(max-width: 767px)");

  const openAnswer = () => {
    setIsAnswerForm(true);
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
      {!isAnswerForm ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
          <SC.AnswerButton onClick={openAnswer}>Відповісти</SC.AnswerButton>
        </Box>
      ) : (
        isAnswerForm && <AnswerForm />
      )}
    </SC.ModalMessagesWindow>
  );
};

export default ModalMessages;
