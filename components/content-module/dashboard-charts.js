import { Box, Divider, Paper, Typography } from "@mui/material";
import ReactEcharts from "echarts-for-react";

const options = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 100],
      type: "bar",
    },
  ],
};

const DashBoardBarCharts = () => {
  return (
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
          width: "400px",
          height: "320px",
        }}
      >
        <Typography textAlign="center" variant="h4">
          {" "}
          Weekly Sales Graph
        </Typography>
        <ReactEcharts
          option={options}
          style={{ width: "320px", height: "300px", color: "#fff" }}
        ></ReactEcharts>
      </Paper>
      <Box sx={{ m: 2 }}>
        <Typography textAlign="center" variant="h4">
          {" "}
          Weekly Sales Graph
        </Typography>
        <Typography textAlign="center" variant="h4">
          {" "}
          Latest Website Performance
        </Typography>
        <Divider sx={{ mb: 1 }} />
        <Typography textAlign="center" variant="h4">
          {" "}
          Campaign set two days ago
        </Typography>
      </Box>
    </Box>
  );
};

export default DashBoardBarCharts;
