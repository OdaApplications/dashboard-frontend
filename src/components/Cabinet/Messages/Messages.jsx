import React, { useEffect, useState } from "react";

import * as SC from "./Messages.styled";
import MessageItem from "./MessageItem/MessageItem";
import { getDepMessages } from "API/depCabinet/depMessages";
import { useSelector } from "react-redux";
import { selectToken } from "redux/auth/authSlice";

import { compareCreatedAt } from "components/helpers/workWithDate";

export const Messages = () => {
  const token = useSelector(selectToken);

  const [userMessages, setUserMessages] = useState([]);

  useEffect(() => {
    async function searchUserMesssages() {
      try {
        const result = await getDepMessages(token);
        setUserMessages(result.data.userMessages);
      } catch (error) {}
    }

    searchUserMesssages();
  }, [token]);

  return (
    <SC.MessagesContainer>
      <SC.MessagesList>
        {userMessages.sort(compareCreatedAt).map((item) => (
          <MessageItem key={item.id} message={item} />
        ))}
      </SC.MessagesList>
    </SC.MessagesContainer>
  );
};

export default Messages;
