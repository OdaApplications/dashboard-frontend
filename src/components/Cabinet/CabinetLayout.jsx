import React from "react";

import { useOutletContext, useParams } from "react-router-dom";
import { cabinetPages } from "../../pagesConfig";
import { useEffect } from "react";

import Messages from "./Messages/Messages";
import Solicitations from "./Solicitations/Solicitations";
import Petitions from "./Petitions/Petitions";

export const CabinetLayout = () => {
  const { page } = useParams();
  const [setSubMenu] = useOutletContext();

  useEffect(() => {
    setSubMenu(cabinetPages);
  }, [setSubMenu]);

  return (
    <>
      {page === "messages" && <Messages />}
      {page === "solicitations" && <Solicitations />}
      {page === "petitions" && <Petitions />}
    </>
  );
};

export default CabinetLayout;
