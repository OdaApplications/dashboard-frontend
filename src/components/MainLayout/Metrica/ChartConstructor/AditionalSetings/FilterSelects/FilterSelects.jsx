import React, { useEffect, useState } from "react";
import { Select } from "./Select";
import * as SC from "./FilterSelects.styled";
import { useSelector } from "react-redux";
import { selectUser } from "redux/auth/authSlice";
import { selectPerson } from "redux/person/personSlice";

export const FilterSelects = ({ filterSelects, setFilter, setGroupFilter }) => {
  const [filterValue, setFilterValue] = useState({});
  const [userFilterPosition, setUserFilterPosition] = useState(0);
  const person = useSelector(selectPerson);
  const user = useSelector(selectUser);

  try {
    filterSelects = JSON.parse(filterSelects);
  } catch (error) {}

  useEffect(() => {
    if (person === "public") return;

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
  }, [filterSelects, person, user]);

  useEffect(() => {
    if (Object.keys(filterValue).length > 0) {
      if (setGroupFilter) {
        setGroupFilter(filterValue);
      } else {
        setFilter(filterValue);
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
          user={person === "cabinet" && user}
        />
      ))}
    </SC.FilterSelectsList>
  );
};
