import React, { useEffect, useState } from "react";

import * as SC from "./Messages.styled";
import MessageItem from "./MessageItem/MessageItem";
import { useGetUserMsgQuery } from "redux/API/cabinetApi";
import { RefreshBtn } from "../../RefreshBtn";
import { LayoutToolbar } from "components/MainLayout/LayoutToolbar/LayoutToolbar";

export const Messages = () => {
  const [userMessages, setUserMessages] = useState([]);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { currentData, isFetching, refetch } = useGetUserMsgQuery({
    page: page,
    limit: rowsPerPage,
  });

  useEffect(() => {
    if (currentData) {
      let newData = [...currentData.data.userMessages];

      setUserMessages(newData);
      setTotalCount(currentData.data.totalCount);
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

        <SC.StyledPagination
          component="div"
          count={totalCount}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage={"Кількість на сторінці:"}
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
