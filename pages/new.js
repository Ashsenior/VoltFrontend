import React from "react";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { css } from "@emotion/react";
import Stack from "@mui/material/Stack";

const DashboardCard = (props) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
      css={css`
        width: 30%;
        height: 200px;
        display: inline-block;
        margin: 16px;
        text-align: center;
        background-color: ${props.background};
        border-radius: 10px;
      `}
    >
      <Card
        sx={{
          backgroundColor: `${props.background}`,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "24px",
          }}
        >
          {props.icon}
          <Typography
            css={css`
              font-size: 14px;
              color: #fff;
              margin-top: 16px;
            `}
            color="textSecondary"
            gutterBottom
          >
            {props.label}
          </Typography>
          <Typography
            css={css`
              font-size: 18px;
              color: #fff;
              margin-top: 16px;
            `}
            variant="h5"
          >
            {props.value}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Dashboard = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <Stack direction={"row"} justifyContent="center" spacing={2}>
        <DashboardCard label="Product" value="10" background="#f44336" />
        <DashboardCard label="Research" value="20" background="#3f51b5" />
        <DashboardCard label="Content" value="30" background="#4caf50" />
      </Stack>
    </div>
  );
};

export default Dashboard;
