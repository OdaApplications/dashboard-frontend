export const labelFormaterFunc = () => {
  return function (val, opts) {
    return val.toFixed();
  };
};

export const labelDonutFormaterFunc = () => {
  return function (value, { seriesIndex, dataPointIndex, w }) {
    return w.config.series[seriesIndex];
  };
};
