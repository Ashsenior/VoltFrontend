import React from "react";
import ReactEcharts from "echarts-for-react";
import { Box, Paper } from "@mui/material";

const option = {
  title: {
    text: "Customized Pie",
    left: "center",
    top: 20,
    textStyle: {
      color: "#777",
    },
  },

  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },

  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1],
    },
  },
  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: "55%",
      center: ["50%", "50%"],
      data: [
        { value: 335, name: "daily Customers" },
        { value: 310, name: "weekly customers" },
        { value: 274, name: "monthly customers" },
        { value: 235, name: "repetetive customers" },
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      roseType: "angle",
      label: {
        normal: {
          textStyle: {
            color: "#777",
          },
        },
      },
      labelLine: {
        normal: {
          lineStyle: {
            color: "#777",
          },
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
      },
      itemStyle: {
        normal: {
          color: "#c23531",
          shadowBlur: 200,
          shadowColor: "#777",
        },
      },

      animationType: "scale",
      animationEasing: "elasticOut",
      animationDelay: function (idx) {
        return Math.random() * 200;
      },
    },
  ],
};

const EchartsPie = () => (
  <Box
    sx={{
      p: 5,
      borderRadius: "12px",
      pt: 2,
      background: "#fff",
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    }}
  >
    <Paper
      sx={{
        p: 4,
        background: "#344767",
        color: "#fff",
        width: "350px",
        height: "350px",
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

export default EchartsPie;
