import React, { useEffect, useState } from "react";
import TablePagination from "@mui/material/TablePagination";

import * as SC from "./Messages.styled";
import MessageItem from "./MessageItem/MessageItem";
// import { getDepMessages } from "API/depCabinet/depMessages";
import { useGetUserMsgQuery } from "redux/API/cabinetApi";

import { compareCreatedAt } from "components/helpers/workWithDate";
import { RefreshBtn } from "../../RefreshBtn";
import { LayoutToolbar } from "components/MainLayout/LayoutToolbar/LayoutToolbar";

export const Messages = () => {
  const [userMessages, setUserMessages] = useState([]);
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { currentData, isFetching, refetch } = useGetUserMsgQuery();
  useEffect(() => {
    if (currentData) {
      let newData = [...currentData.data.userMessages];
      newData.sort(compareCreatedAt);
      setUserMessages(newData);
    }
  }, [currentData]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <LayoutToolbar>
        <RefreshBtn onClick={refetch} isFetching={isFetching} />

        <TablePagination
          component="div"
          count={100}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
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
