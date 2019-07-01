import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { bindActionCreators } from "redux";
import * as actions from "./../actions/chart-action";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    chartData: state.chartData,
    showBarView: state.showBarView,
    showPieView: state.showPieView,
    showLineView: state.showLineView,
    largestCity: state.largestCity
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

const DemoChart = props => {
  function showChartType(chartType) {
    if (chartType === "BAR") {
      props.showChart({ bar: true, pie: false, line: false });
    } else if (chartType === "PIE") {
      props.showChart({ bar: false, pie: true, line: false });
    } else if (chartType === "LINE") {
      props.showChart({ bar: false, pie: false, line: true });
    } else {
      props.showChart({ bar: false, pie: false, line: false });
    }
  }

  return (
    <section className="chart">
      <button onClick={() => showChartType("BAR")}>BAR</button>
      <button onClick={() => showChartType("PIE")}>PIE </button>
      <button onClick={() => showChartType("LINE")}>LINE</button>
      {(props.showBarView || props.showPieView || props.showLineView) && (
        <button onClick={() => showChartType("RESET")}>RESET</button>
      )}
      {props.showBarView && (
        <Bar
          data={props.chartData}
          height={75}
          options={{
            title: {
              display: true,
              text: `Largest Cities in ${props.largestCity}`,
              fontSize: 25
            },
            legend: {
              display: true,
              position: "bottom"
            }
          }}
        />
      )}
      {props.showPieView && (
        <Pie
          data={props.chartData}
          height={75}
          options={{
            title: {
              display: true,
              text: `Largest Cities in ${props.largestCity}`,
              fontSize: 25
            },
            legend: {
              display: true,
              position: "bottom"
            }
          }}
        />
      )}
      {props.showLineView && (
        <Line
          data={props.chartData}
          height={75}
          options={{
            title: {
              display: true,
              text: `Largest Cities in ${props.largestCity}`,
              fontSize: 25
            },
            legend: {
              display: true,
              position: "bottom"
            }
          }}
        />
      )}
    </section>
  );
};

const Chart = connect(
  mapStateToProps,
  mapDispatchToProps
)(DemoChart);
export default Chart;
