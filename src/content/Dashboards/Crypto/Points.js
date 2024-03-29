import {
  Button,
  Card,
  Box,
  Grid,
  Typography,
  useTheme,
  styled,
  Avatar,
  Divider,
  alpha,
  ListItem,
  ListItemText,
  List,
  ListItemAvatar,
} from "@mui/material";
import TrendingUp from "@mui/icons-material/TrendingUp";
import Text from "src/components/Text";
import { Chart } from "src/components/Chart";
import Router from "next/router";
import {
  Biotech,
  LocalGroceryStore,
  MonetizationOn,
  Psychology,
} from "@mui/icons-material";
import dynamic from "next/dynamic";

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.main};
      color: ${theme.palette.success.contrastText};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.success};
`
);

const Piechart = dynamic(() => import("./piechart"));
const ListItemAvatarWrapper = styled(ListItemAvatar)(
  ({ theme }) => `
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${theme.spacing(8)};
  padding: ${theme.spacing(0)};
  border-radius: 60px;
  background: ${
    theme.palette.mode === "dark"
      ? theme.colors.alpha.trueWhite[30]
      : alpha(theme.colors.alpha.black[100], 0.07)
  };

  img {
    background: ${theme.colors.alpha.trueWhite[100]};
    padding: ${theme.spacing(0.5)};
    display: block;
    border-radius: inherit;
    height: ${theme.spacing(4.5)};
    width: ${theme.spacing(4.5)};
  }
`
);
const Colors = ["#ff9900", "#F47C7C", "#5FD068", "#333"];
function Points({ startup }) {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
        },
      },
    },
    colors: Colors,
    dataLabels: {
      enabled: true,
      formatter(val) {
        return `${val}%`;
      },
      style: {
        colors: [theme.colors.alpha.trueWhite[100]],
      },
      background: {
        enabled: true,
        foreColor: theme.colors.alpha.trueWhite[100],
        padding: 8,
        borderRadius: 4,
        borderWidth: 0,
        opacity: 0.3,
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 1,
          color: theme.colors.alpha.black[70],
          opacity: 0.5,
        },
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        color: theme.colors.alpha.black[50],
        opacity: 0.5,
      },
    },
    fill: {
      opacity: 1,
    },
    labels: ["Strategy", "Research", "Marketing", "Sales"],
    legend: {
      labels: {
        colors: theme.colors.alpha.trueWhite[100],
      },
      show: false,
    },
    stroke: {
      width: 0,
    },
    theme: {
      mode: theme.palette.mode,
    },
  };
  console.log(startup);

  const chartSeries = [20, 10, 40, 30];

  return (
    <Card>
      <Grid spacing={0} container>
        <Grid item xs={0} md={0}>
          <Box p={2}>
            <Typography
              sx={{
                pb: 1,
              }}
              variant="h4"
            >
              Points Scored
            </Typography>
            <Box>
              <Typography variant="h3" gutterBottom>
                {startup?.points}
              </Typography>
              <Typography
                variant="h5"
                fontWeight="normal"
                color="text.secondary"
              >
                You are performing well in marketing module
              </Typography>
              <Box
                display="flex"
                sx={{
                  py: 1,
                }}
                alignItems="center"
              >
                <AvatarSuccess
                  sx={{
                    mr: 2,
                  }}
                  variant="rounded"
                >
                  <TrendingUp fontSize="large" />
                </AvatarSuccess>
                <Box>
                  <Typography variant="h4">{startup?.revenue1}</Typography>
                  <Typography variant="subtitle2" noWrap>
                    this month
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Grid container spacing={3}>
              <Grid sm item>
                <Button
                  fullWidth
                  color={"error"}
                  onClick={() => {
                    Router.push("/module/sales");
                  }}
                >
                  Focus on Sales
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          sx={{
            position: "relative",
          }}
          display="flex"
          alignItems="center"
          item
          xs={12}
          md={6}
        >
          <Box
            component="span"
            sx={{
              display: { xs: "none", md: "inline-block" },
            }}
          >
            <Divider absolute orientation="vertical" />
          </Box>
          <Box flex={1}>
            <Grid container spacing={0}>
              <Grid
                xs={12}
                sm={6}
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Chart
                  height={250}
                  options={chartOptions}
                  series={chartSeries}
                  type="donut"
                />
                {/* <Piechart /> */}
              </Grid>
              <Grid xs={12} sm={6} item>
                <List
                  disablePadding
                  sx={{
                    width: "80%",
                    margin: "auto",
                  }}
                >
                  <ListItem disableGutters>
                    <ListItemAvatarWrapper>
                      <Avatar sx={{ bgcolor: `${Colors[0]}` }}>
                        <Psychology />
                      </Avatar>
                    </ListItemAvatarWrapper>
                    <ListItemText
                      primary="Strategy"
                      primaryTypographyProps={{ variant: "h5", noWrap: true }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        20%
                      </Typography>
                      <Text color="success">+2.54%</Text>
                    </Box>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemAvatarWrapper>
                      <Avatar sx={{ bgcolor: `${Colors[1]}` }}>
                        <Biotech />
                      </Avatar>
                    </ListItemAvatarWrapper>
                    <ListItemText
                      primary="Research"
                      primaryTypographyProps={{ variant: "h5", noWrap: true }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        10%
                      </Typography>
                      <Text color="error">-1.22%</Text>
                    </Box>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemAvatarWrapper>
                      <Avatar sx={{ bgcolor: `${Colors[2]}` }}>
                        <LocalGroceryStore />
                      </Avatar>
                    </ListItemAvatarWrapper>
                    <ListItemText
                      primary="Marketing"
                      primaryTypographyProps={{ variant: "h5", noWrap: true }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        40%
                      </Typography>
                      <Text color="success">+10.50%</Text>
                    </Box>
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemAvatarWrapper>
                      <Avatar sx={{ bgcolor: `${Colors[3]}` }}>
                        <MonetizationOn />
                      </Avatar>
                    </ListItemAvatarWrapper>
                    <ListItemText
                      primary="Sales"
                      primaryTypographyProps={{ variant: "h5", noWrap: true }}
                    />
                    <Box>
                      <Typography align="right" variant="h4" noWrap>
                        30%
                      </Typography>
                      <Text color="error">-12.38%</Text>
                    </Box>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={0} md={0}>
          <Box p={2}>
            <Typography
              sx={{
                pb: 1,
              }}
              variant="h4"
            >
              Total Expenses
            </Typography>
            <Box>
              <Typography variant="h3" gutterBottom>
                {startup?.revenue1} + {startup?.revenue2}
              </Typography>

              <Box
                display="flex"
                sx={{
                  py: 1,
                }}
                alignItems="center"
              >
                <Box>
                  <Typography variant="h4">{startup?.revenue1}</Typography>
                  <Typography variant="subtitle2" noWrap>
                    this month
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4">{startup?.revenue2}</Typography>
                  <Typography variant="subtitle2" noWrap>
                    this month
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Grid container spacing={3}>
              <Grid sm item>
                <Button
                  fullWidth
                  color={"error"}
                  onClick={() => {
                    Router.push("/module/sales");
                  }}
                >
                  Limit your Expenses
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Points;
