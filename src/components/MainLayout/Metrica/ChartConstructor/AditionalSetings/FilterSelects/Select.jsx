import React, { useState, useEffect } from "react";

import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select as MuiSelect,
} from "@mui/material";
import { SelectClone } from "./SelectClone";
import { useGetFilterValuesQuery } from "redux/API/chartApi";

import * as SC from "./FilterSelects.styled";

export const Select = ({
  selectConfig,
  filterValue,
  setFilterValue,
  user,
  userFilterPosition,
}) => {
  const [value, setValue] = useState("");
  const [currentValues, setCurrentValues] = useState(null);

  const { id, title, subSelect, table, target } = selectConfig;

  const { currentData: selectValues } = useGetFilterValuesQuery(
    {
      target,
      table,
      filter:
        filterValue && Object.values(filterValue)?.length > 0
          ? encodeURIComponent(JSON.stringify(filterValue))
          : null,
    },
    { skip: filterValue[target] }
  );

  useEffect(() => {
    if (selectValues) {
      setValue("");
      const userFilter = user?.access;
      if (userFilter && userFilter === selectConfig.target) {
        setCurrentValues([{ [userFilter]: [user[userFilter]] }]);
        setValue(user[selectConfig.target]);
      } else if (
        userFilter &&
        userFilter !== selectConfig.target &&
        !(selectConfig.position > userFilterPosition)
      ) {
        setCurrentValues([
          { [selectConfig.target]: [user[selectConfig.target]] },
        ]);
        setValue(user[selectConfig.target]);
      } else {
        setCurrentValues(selectValues.data);
      }
    }
  }, [
    selectConfig.position,
    selectConfig.target,
    selectValues,
    user,
    userFilterPosition,
  ]);

  useEffect(() => {
    if (value !== "") {
      setFilterValue((prevState) => {
        return {
          ...prevState,
          [target]: value,
        };
      });
    } else {
      setFilterValue((prevState) => {
        const newState = { ...prevState };
        delete newState[target];
        return newState;
      });
    }
  }, [value, target, setFilterValue]);

  const handleChange = (event) => {
    setValue(event.target.value);
    if (subSelect) {
      setFilterValue((prevState) => {
        const newState = { ...prevState };
        delete newState[subSelect.target];
        return newState;
      });
    }
  };

  if (currentValues)
    return (
      <>
        <SC.FilterSelectsItem>
          {Array.isArray(currentValues) && currentValues.length > 1 && (
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
          <SelectClone
            selectConfig={subSelect}
            filterValue={filterValue}
            setFilterValue={setFilterValue}
            user={user}
            userFilterPosition={userFilterPosition}
          />
        )}
      </>
    );
};

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
