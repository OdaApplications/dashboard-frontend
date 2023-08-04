import React, { useEffect, useState } from "react";
import { Select } from "./Select";
import * as SC from "./FilterSelects.styled";
import { useSelector } from "react-redux";
import { selectUser } from "redux/auth/authSlice";

export const FilterSelects = ({
  filterSelects,
  data,
  setFilter,
  setGroupFilter,
}) => {
  const [filterValue, setFilterValue] = useState({});
  const [userFilterPosition, setUserFilterPosition] = useState(0);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user && user.access && filterSelects) {
      let position = 0;
      let currentObj = filterSelects[0];

      while (currentObj.target !== user.access) {
        currentObj = currentObj.subSelect;
        if (!currentObj) return;
        position = currentObj.position;
      }
      setUserFilterPosition(position);
    }
  }, [filterSelects, user, userFilterPosition]);

  useEffect(() => {
    if (Object.keys(filterValue).length > 0) {
      if (setGroupFilter) {
        setGroupFilter(Object.values(filterValue));
      } else {
        setFilter(Object.values(filterValue));
      }
    }
  }, [filterValue, setFilter, setGroupFilter]);

  return (
    <SC.FilterSelectsList>
      {filterSelects.map((option) => (
        <Select
          key={option.title}
          selectConfig={option}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          userFilterPosition={userFilterPosition}
          setUserFilterPosition={setUserFilterPosition}
          data={data}
          user={user}
        />
      ))}
    </SC.FilterSelectsList>
  );
};
