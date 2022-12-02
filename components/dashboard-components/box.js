// @mui
import PropTypes from "prop-types";
import { alpha, styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";
// utils
import Iconify from "../iconify/Iconify";
// import { fShortenNumber } from "../../../utils/formatNumber";
// components

// ----------------------------------------------------------------------

const StyledIcon = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function AppWidgetSummary({
  title,
  total,
  icon,
  color = "primary",
  sx,
  ...other
}) {
  return (
    <Card
      sx={{
        py: 1,
        boxShadow: 0,
        textAlign: "center",
        color: (theme) => theme.palette[color].darker,
        backgroundImage: (theme) =>
          `linear-gradient(135deg, ${alpha(
            theme.palette[color].dark,
            0.36
          )} 0%, ${alpha(theme.palette[color].dark, 0.36)} 100%)`,
        ...sx,
      }}
      {...other}
    >
      <StyledIcon
        sx={{
          color: (theme) => theme.palette[color].dark,

          backgroundImage: (theme) =>
            `linear-gradient(135deg, ${alpha(
              theme.palette[color].dark,
              0.35
            )} 0%, ${alpha(theme.palette[color].dark, 0.35)} 100%)`,
        }}
      >
        <Iconify icon={icon} width={44} height={44} />
      </StyledIcon>

      <Typography variant="h3">23</Typography>

      <Typography variant="h6" fontWeight={700} sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}
