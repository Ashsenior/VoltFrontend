import { Paper, Typography } from "@mui/material";
import ReactEcharts from "echarts-for-react";

const options = {
  xAxis: {
    type: "category",
    data: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130, 120, 45, 23, 134, 120],
      type: "line",
    },
    {
      data: [34, 20, 150, 180, 70, 40, 190, 220, 254, 243, 34, 140],
      type: "line",
    },
  ],
};

const DashBoardBarCharts = () => {
  return (
    <Paper className="py-4">
      <Typography textAlign="center" variant="h4">
        {" "}
        Sales per Annum
      </Typography>
      <ReactEcharts
        option={options}
        className="w-full"
        style={{height: "60vh"}}
      ></ReactEcharts>
    </Paper>
  );
};

export default DashBoardBarCharts;
