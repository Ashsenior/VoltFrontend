import { Paper, Typography } from "@mui/material";
import ReactEcharts from "echarts-for-react";

const options = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
    },
  ],
};

const DashBoardBarCharts = () => {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography textAlign="center" variant="h4">
        {" "}
        Sales Graph
      </Typography>
      <ReactEcharts
        option={options}
        style={{ width: "600px", height: "450px" }}
      ></ReactEcharts>
    </Paper>
  );
};

export default DashBoardBarCharts;
