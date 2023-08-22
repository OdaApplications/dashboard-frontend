import React, { useEffect, useState } from "react";

import * as SC from "./Messages.styled";
import MessageItem from "./MessageItem/MessageItem";
import { useGetUserMsgQuery } from "redux/API/cabinetApi";

import { compareCreatedAt } from "components/helpers";
import { RefreshBtn } from "../../RefreshBtn";
import { LayoutToolbar } from "components/MainLayout/LayoutToolbar/LayoutToolbar";

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
    <>
      <LayoutToolbar>
        <RefreshBtn onClick={refetch} isFetching={isFetching} />
      </LayoutToolbar>
      <SC.MessagesContainer>
        <SC.MessagesList>
          {userMessages.map((item) => (
            <MessageItem key={item.id} message={item} />
          ))}
        </SC.MessagesList>
      </SC.MessagesContainer>
    </>
  );
};

export default Messages;
