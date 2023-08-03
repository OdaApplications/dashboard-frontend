import React, { useEffect, useState } from "react";

import * as SC from "./Messages.styled";
import MessageItem from "./MessageItem/MessageItem";
// import { getDepMessages } from "API/depCabinet/depMessages";
import { useGetUserMsgQuery } from "redux/API/cabinetApi";

import { compareCreatedAt } from "components/helpers/workWithDate";
import { RefreshBtn } from "../RefreshBtn";

export const Messages = () => {
  const [userMessages, setUserMessages] = useState([]);

  const { currentData, isFetching, refetch } = useGetUserMsgQuery();
  useEffect(() => {
    if (currentData) {
      let newData = [...currentData.data.userMessages];
      newData.sort(compareCreatedAt);
      setUserMessages(newData);
    }
  }, [currentData]);

  return (
    <SC.MessagesContainer>
      <RefreshBtn onClick={refetch} isFetching={isFetching} />
      <SC.MessagesList>
        {userMessages.map((item) => (
          <MessageItem key={item.id} message={item} />
        ))}
      </SC.MessagesList>
    </SC.MessagesContainer>
  );
};

export default Messages;
