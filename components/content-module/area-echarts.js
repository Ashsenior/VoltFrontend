import React from "react";
import ReactEcharts from "echarts-for-react";
import echarts from "echarts";
import { Box, Paper } from "@mui/material";

let base = +new Date(1968, 9, 3);
let oneDay = 24 * 3600 * 1000;
let date = [];

let data = [Math.random() * 300];

for (var i = 1; i < 20000; i++) {
  var now = new Date((base += oneDay));
  date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"));
  data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}

const option = {
  tooltip: {
    trigger: "axis",
    position: function (pt) {
      return [pt[0], "10%"];
    },
  },
  title: {
    left: "center",
    text: "Data",
  },
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: "none",
      },
      restore: {},
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: date,
  },
  yAxis: {
    type: "value",
    boundaryGap: [0, "100%"],
  },
  dataZoom: [
    {
      type: "inside",
      start: 0,
      end: 10,
    },
    {
      start: 0,
      end: 10,
      handleIcon:
        "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
      handleSize: "80%",
      handleStyle: {
        color: "#fff",
        shadowBlur: 3,
        shadowColor: "rgba(0, 0, 0, 0.6)",
        shadowOffsetX: 2,
        shadowOffsetY: 2,
      },
    },
  ],
  series: [
    {
      name: "Data",
      type: "line",
      smooth: true,
      symbol: "none",
      sampling: "average",
      itemStyle: {
        normal: {
          color: "rgb(255, 70, 131)",
        },
      },
      //   areaStyle: {
      //     normal: {
      //     //   color: new echarts.LinearGradient(0, 0, 0, 1, [
      //     //     {
      //     //       offset: 0,
      //     //       color: "rgb(255, 158, 68)",
      //     //     },
      //     //     {
      //     //       offset: 1,
      //     //       color: "rgb(255, 70, 131)",
      //     //     },
      //       ]),
      //     },
      //   },
      data: data,
    },
  ],
};

class EchartsArea extends React.Component {
  render() {
    return (
      <Box sx={{ p: 5, borderRadius: "12px", pt: 2, background: "#fff" }}>
        <Paper
          sx={{
            p: 4,
            background: "#fff",
            color: "#fff",
            width: "500px",
            height: "350px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <ReactEcharts
            option={option}
            style={{ height: "300px", width: "100%" }}
            className={"react_for_echarts"}
          />
        </Paper>
      </Box>
    );
  }
}

export default EchartsArea;
