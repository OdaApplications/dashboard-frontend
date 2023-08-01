import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

import ResponsiveLayout from "../../../ResponsiveLayout/ResponsiveLayout";
import { ChartConstructor } from "../../ChartConstructor/ChartConstructor";

const containerSizes = {
  xs: { w: 4, h: 1 },
  s: { w: 4, h: 2 },
  sl: { w: 6, h: 2 },
  mt: { w: 4, h: 3 },
  mtl: { w: 6, h: 3 },
  m: { w: 4, h: 4 },
  ml: { w: 6, h: 4 },
  lh: { w: 8, h: 4 },
  lv: { w: 4, h: 8 },
  xl: { w: 8, h: 8 },
  fs: { w: 12, h: 8 },
};

// const layout = [{ i: "a", x: 0, y: 0, w: 1, h: 2 }];

export const LayoutGrid = ({ charts: newCharts, groupFilter, isDragable }) => {
  const [layout, setLayout] = useState([]);
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    setCharts(newCharts);
  }, [newCharts]);

  useEffect(() => {
    if (!charts) {
      setLayout([]);
      return;
    }
    if (charts) {
      let newArr = [];

      for (const chart of charts) {
        const {
          id: i,
          size,
          location: { y, x },
        } = chart;
        const { w, h } = containerSizes[size];
        let data = { i, w, h, x, y };
        newArr.push(data);
      }
      setLayout(newArr);
    }
  }, [charts]);
  return (
    <ResponsiveLayout
      isDragable={isDragable}
      layout={layout}
      setLayout={setLayout}
    >
      {layout.map((elem, index) => (
        <Box key={elem.i}>
          {charts && charts.length > 0 && (
            <ChartConstructor groupFilter={groupFilter} chart={charts[index]} />
          )}
        </Box>
      ))}
    </ResponsiveLayout>
  );
};
