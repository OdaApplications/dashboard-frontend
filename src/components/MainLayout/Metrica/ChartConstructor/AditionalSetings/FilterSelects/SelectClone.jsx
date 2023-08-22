import React, { useState, useEffect } from "react";

import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select as MuiSelect,
} from "@mui/material";
import { Select } from "./Select";
import { useGetFilterValuesQuery } from "redux/API/chartApi";

import * as SC from "./FilterSelects.styled";

export const SelectClone = ({
  selectConfig,
  filterValue,
  prevFilterQueryValues = {},
  user,
  setFilterValue,
  userFilterPosition,
}) => {
  const [value, setValue] = useState("");
  const [currentValues, setCurrentValues] = useState(null);
  const [queryFilterValues, setQueryFilterValues] = useState(null);
  const { id, title, position, subSelect, table, target } = selectConfig;

  const { currentData: selectValues } = useGetFilterValuesQuery(
    {
      target,
      table,
      filter:
        queryFilterValues && Object.values(queryFilterValues)?.length > 0
          ? encodeURIComponent(JSON.stringify(queryFilterValues))
          : null,
    },
    {}
  );

  useEffect(() => {
    if (selectValues) {
      setCurrentValues(selectValues.data);
    }
  }, [selectValues]);

  useEffect(() => {
    if (Object.keys(prevFilterQueryValues).length > 0) {
      setQueryFilterValues(prevFilterQueryValues);
    }
  }, [prevFilterQueryValues]);

  // useEffect(() => {
  //   if (selectValues) {
  //     const userFilter = user?.access;
  //     if (userFilter && userFilter === selectConfig.target) {
  //       setCurrentValues({ [user[userFilter]]: data[user[userFilter]] });
  //     } else if (
  //       userFilter &&
  //       userFilter !== selectConfig.target &&
  //       !(selectConfig.position > userFilterPosition)
  //     ) {
  //       setCurrentValues({
  //         [user[selectConfig.target]]: data[user[selectConfig.target]],
  //       });
  //       setValue(user[selectConfig.target]);
  //     } else {
  //       setCurrentValues(data);
  //     }
  //   }
  // }, []);

  useEffect(() => {
    setFilterValue((prevState) => {
      return {
        ...prevState,
        [position]: value,
      };
    });
  }, [setFilterValue, position, value]);

  const handleChange = (event) => {
    setValue(event.target.value);
    setQueryFilterValues({
      ...queryFilterValues,
      [target]: event.target.value,
    });
  };

  console.log("542", queryFilterValues);
  console.log("```", currentValues);

  if (currentValues)
    return (
      <>
        <SC.FilterSelectsItem>
          {Array.isArray(currentValues) && currentValues.length > 0 && (
            <Box>
              <FormControl
                size="small"
                sx={{
                  width: 120,
                  color: "#000",
                  borderColor: "#000",
                  "&:hover": {
                    "&& fieldset": {
                      color: "inherit",
                      borderColor: "rgba(255, 255, 255, 1)",
                    },
                  },
                  "& label.Mui-focused": {
                    color: "#000",
                  },
                  "& svg": {
                    color: "inherit",
                  },
                  "& fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.5)",
                  },
                }}
              >
                <InputLabel
                  sx={{
                    color: "inherit",
                    borderColor: "#000",
                  }}
                  id={`${id}-label`}
                >
                  {title}
                </InputLabel>
                <MuiSelect
                  labelId={`${id}-label`}
                  id={id}
                  value={value}
                  label={title}
                  sx={{
                    color: "#000",
                    borderColor: "#000",
                    "&& .MuiOutlinedInput-notchedOutline": {
                      borderWidth: "2px !important",
                      borderColor: "inherit !important",
                    },
                  }}
                  onChange={handleChange}
                >
                  <MenuItem value="">{"Все"}</MenuItem>
                  {Array.isArray(currentValues) &&
                    currentValues.map((value, index) => (
                      <MenuItem key={index} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                </MuiSelect>
              </FormControl>
            </Box>
          )}
        </SC.FilterSelectsItem>

        {subSelect && value.length > 0 && (
          <Select
            selectConfig={subSelect}
            prevFilterQueryValues={queryFilterValues}
            filterValue={filterValue}
            setFilterValue={setFilterValue}
            user={user}
            userFilterPosition={userFilterPosition}
          />
        )}
      </>
    );
};
