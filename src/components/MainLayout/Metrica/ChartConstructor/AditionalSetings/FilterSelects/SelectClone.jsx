import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select as MuiSelect } from "@mui/material";
import { Select } from "./Select";
import * as SC from "./FilterSelects.styled";

export const SelectClone = ({
  selectConfig,
  data,
  user,
  filterValue,
  setFilterValue,
  userFilterPosition,
}) => {
  const [value, setValue] = useState("");
  const [currentData, setCurrentData] = useState(data);
  const { id, title, position, subSelect } = selectConfig;

  useEffect(() => {
    if (data) {
      const userFilter = user?.access;
      if (userFilter && userFilter === selectConfig.target) {
        setCurrentData({ [user[userFilter]]: data[user[userFilter]] });
      } else if (
        userFilter &&
        userFilter !== selectConfig.target &&
        !(selectConfig.position > userFilterPosition)
      ) {
        setCurrentData({
          [user[selectConfig.target]]: data[user[selectConfig.target]],
        });
      } else {
        setCurrentData(data);
      }
    }
  }, [
    data,
    selectConfig.position,
    selectConfig.target,
    user,
    userFilterPosition,
  ]);

  useEffect(() => {
    if (currentData) setValue(Object.keys(currentData)[0]);
  }, [currentData]);

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
  };

  if (currentData)
    return (
      <>
        <SC.FilterSelectsItem>
          {Array.isArray(Object.keys(currentData)) &&
            Object.keys(currentData).length > 1 && (
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
                    {Array.isArray(Object.keys(currentData)) &&
                      Object.keys(currentData).map((value, index) => (
                        <MenuItem key={index} value={value}>
                          {value}
                        </MenuItem>
                      ))}
                  </MuiSelect>
                </FormControl>
              </Box>
            )}
        </SC.FilterSelectsItem>
        {subSelect && (
          <Select
            selectConfig={subSelect}
            data={currentData[value]}
            filterValue={filterValue}
            setFilterValue={setFilterValue}
            user={user}
            userFilterPosition={userFilterPosition}
          />
        )}
      </>
    );
};
