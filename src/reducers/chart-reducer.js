import { SHOW_CHART } from "../constants/action-type";

const initialState = {
  chartData: {
    labels: ["Boston", "Worcester", "Springfield", "Lowell", "Cambridge", "New Bedford"],
    datasets: [
      {
        label: "Population",
        data: [617594, 181045, 153060, 106519, 105162, 95072],
        backgroundColor: [
          "rgba(255,255,132,0.6)",
          "rgba(99,255,132,0.6)",
          "rgba(124,50,255,0.6)",
          "rgba(56,255,20,0.6)",
          "rgba(25,99,132,0.6)",
          "rgba(65,54,235,0.6)"
        ]
      }
    ]
  },
  showBarView: false,
  showPieView: false,
  showLineView: false,
  largestCity: "Massachussets"
};

function rootReducer(state = initialState, action) {
  let tempState = { ...state };

  if (action.type === SHOW_CHART) {
    tempState.showBarView = action.payload.bar;
    tempState.showPieView = action.payload.pie;
    tempState.showLineView = action.payload.line;
  }

  return tempState;
}

export default rootReducer;
