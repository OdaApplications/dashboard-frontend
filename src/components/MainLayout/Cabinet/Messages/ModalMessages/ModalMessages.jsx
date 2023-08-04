import { dateTransformer } from "components/helpers/workWithDate";
import { Box, useMediaQuery } from "@mui/material";
import * as SC from "./ModalMessages.styled";

const ModalMessages = ({ message, onClose }) => {
  const { title, text, senderName, senderEmail, createdAt } = message;

  const isSmallScreen = useMediaQuery("(max-width: 767px)");

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
            {senderName}
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

      <div>
        <SC.SenderText style={{ fontSize: isSmallScreen ? "12px" : "14px" }}>
          {text}
        </SC.SenderText>
      </div>
    </SC.ModalMessagesWindow>
  );
};

export default ModalMessages;
