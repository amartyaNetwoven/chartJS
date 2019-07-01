import { SHOW_CHART } from "../constants/action-type";

export const showChart = payload => {
  return { type: SHOW_CHART, payload };
};
