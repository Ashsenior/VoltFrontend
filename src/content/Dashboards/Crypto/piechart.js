import EChartsReact from "echarts-for-react";
import React, { useEffect } from "react";

const DashboardPieChart = ({ pieChartData }) => {
  const ReduceAnchorInvestment = (objectArray, property) => {
    return objectArray?.reduce((result, current) => {
      let anchorArr = result?.filter((a) => a.uuid === current.uuid);

      if (anchorArr.length > 0) {
        anchorArr[0].invested_amount += current.invested_amount;
      } else {
        result.push({
          uuid: current.uuid,
          name: current.anchor_name,
          value: current.invested_amount,
        });
      }

      return result;
    }, []);
  };

  let groupedAnchor = ReduceAnchorInvestment(pieChartData, "uuid");

  useEffect(() => {
    groupedAnchor;
  }, [pieChartData]);

  var option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "-3px",
      left: "center",
    },
    series: [
      {
        name: "",
        type: "pie",
        radius: ["40%", "70%"],
        label: {
          show: true,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "20",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [1, 2, 3, 4],
      },
    ],
  };
  return (
    <>
      <EChartsReact
        option={option}
        style={{
          height: "300px",
          width: "350px",
        }}
      />
    </>
  );
};

export default DashboardPieChart;
