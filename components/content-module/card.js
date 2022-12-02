import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

import { Box, Typography } from "@mui/material";

function ComplexStatisticsCard({
  color,
  title,
  count,
  percentage,
  icon,
  backgroundColor,
}) {
  return (
    <Card>
      <Box display="flex" justifyContent="space-between" pt={1} px={2}>
        <Box
          variant="gradient"
          bgColor={color}
          color={color === "light" ? "dark" : "white"}
          coloredShadow={"#233213"}
          borderRadius="xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="8rem"
          padding={3}
          sx={{ marginTop: "-24px" }}
        >
          <Box sx={{ mt: "-30px", position: "absolute", ml: "30px" }}>
            <Icon
              fontSize="large"
              sx={{
                backgroundColor: backgroundColor,
                p: 2,
                color: "#fff",
                width: "100px",
                height: "100px",
                mt: "-24px",
                borderRadius: "12px",
              }}
              color=""
            >
              {icon}
            </Icon>
          </Box>
        </Box>
        <Box textAlign="right" lineHeight={1.25}>
          <Typography variant="button" fontWeight="light" color="text">
            {title}
          </Typography>
          <Typography variant="h2" fontWeight={700}>
            {count}
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box pb={2} px={2} mt={2}>
        <Typography component="p" variant="button" color="text" display="flex">
          <Typography component="span" variant="button" fontWeight="bold">
            {percentage.amount}
          </Typography>
          &nbsp;{percentage.label}
        </Typography>
      </Box>
    </Card>
  );
}

// Setting default values for the props of ComplexStatisticsCard
ComplexStatisticsCard.defaultProps = {
  color: "info",
  percentage: {
    color: "success",
    text: "",
    label: "",
  },
};

// Typechecking props for the ComplexStatisticsCard
ComplexStatisticsCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
  icon: PropTypes.node.isRequired,
};

export default ComplexStatisticsCard;
