import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

import { metricaPages, metricaPagesCabinet } from "pagesConfig";
import * as SC from "./PageLayoute.styled";

import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { MessageBox } from "components/MainLayout/MessageBox";
import { ChartGroupContainer } from "./ChartGroupContainer/ChartGroupContainer";
// import { useGetPageConfigQuery } from "redux/API/pageChartsApi";
import { LayoutToolbar } from "components/MainLayout/LayoutToolbar/LayoutToolbar";
import { DNDSwitch } from "components/MainLayout/Metrica/PageLayout/DNDSwitch";
import { RefreshBtn } from "components/MainLayout/RefreshBtn";
import { useSelector } from "react-redux";
import { selectPerson } from "redux/person/personSlice";

const PageLayoute = () => {
  const [setSubMenu] = useOutletContext();

  const [isDragable, setIsDragable] = useState(false);
  const [currentPageConfig, setCurrentPageConfig] = useState(null);
  const [chartsGroups, setChartsGroups] = useState([]);
  const [subNav, setSubNav] = useState([]);
  const [value, setValue] = useState(0);
  const params = useParams();
  const navigate = useNavigate();
  const person = useSelector(selectPerson);
  // const paramsValues = Object.values(params);

  // const { currentData, refetch, isFetching } = useGetPageConfigQuery(
  //   paramsValues[paramsValues.length - 1]
  // );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (person === "cabinet") {
      setSubMenu(metricaPagesCabinet);
    } else {
      setSubMenu(metricaPages);
    }
  }, [person, setSubMenu]);

  useEffect(() => {
    const pageParams = Object.entries(params);
    if (pageParams.length === 0) {
      navigate("/404");
      return;
    }

    const pageConfig = pageParams.reduce((acc, elem, index) => {
      if (index === 0) {
        return acc.find((item) => item.id === elem[1]);
      }
      let newAcc = acc.children.find((item) => item.id === elem[1]);
      if (elem[0] === "sub" && newAcc?.children) {
        setSubNav(newAcc.children);
        if (params.group) {
          const index = newAcc.children.findIndex(
            (item) => item.id === params.group
          );
          setValue(index);
        } else {
          setValue(0);
          navigate(newAcc.children[0].url);
        }
      } else if (elem[0] === "sub" && !newAcc?.children) {
        setSubNav([]);
      }

      return newAcc;
    }, metricaPages);

    if (!pageConfig) {
      navigate("/404");
      return;
    }
    setCurrentPageConfig(pageConfig);
    setChartsGroups(pageConfig?.chartsGroups || []);
  }, [navigate, params]);

  // useEffect(() => {
  //   if (currentData) {
  //     setChartsGroups(currentData?.data?.chartsGroups || []);
  //   }
  // }, [currentData]);
  // console.log(chartsGroups);

  return (
    <SC.PageLayoutContainerStyled>
      {currentPageConfig && (
        <>
          <LayoutToolbar>
            <RefreshBtn />
            <Box sx={{ flexGrow: 1 }} />
            {subNav.length > 0 && (
              <Box sx={{ maxWidth: "100%" }}>
                <SC.PageLayoutTabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  {subNav.map((item) => (
                    <SC.PageLayoutTab
                      key={item?.id}
                      label={item?.title}
                      onClick={() => navigate(item?.url)}
                    />
                  ))}
                </SC.PageLayoutTabs>
              </Box>
            )}
            <Box sx={{ flexGrow: 1 }} />
            {person === "cabinet" && (
              <DNDSwitch
                isDragable={isDragable}
                setIsDragable={setIsDragable}
              />
            )}
          </LayoutToolbar>
          {chartsGroups.length === 0 ? (
            <Box sx={{ mt: "20vh" }}>
              <MessageBox text={"Інформація опрацьовується"} />
            </Box>
          ) : (
            chartsGroups.map((item, index) => (
              <ChartGroupContainer
                person={person}
                isDragable={isDragable}
                key={index}
                chartGroup={item}
              />
            ))
          )}
          <Box
            sx={{
              height: "100%",
              width: "1px",
              position: "absolute",
              right: "-20px",
              top: "-20px",
            }}
          />
        </>
      )}
    </SC.PageLayoutContainerStyled>
  );
};

export default PageLayoute;
