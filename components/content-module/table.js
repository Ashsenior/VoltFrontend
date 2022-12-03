import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ToggleButton from "@mui/material/ToggleButton";
import { NoSsr, Paper, Stack, Theme, Typography } from "@mui/material";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";

import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Link from "next/link";
import { useRouter } from "next/router";
import Moment from "moment";

const ListingTable = ({ rows, headerRows, tableHeading, task }) => {
  const router = useRouter();

  const handleGetFullDateWithoutTime = (date) => {
    Moment.locale("en");
    return Moment(date).format("DD MMMM YYYY");
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.12)",
        padding: 2,
      }}
    >
      <Stack direction="row" justifyContent={"space-between"}>
        <Typography fontWeight={700}>Content List</Typography>
      </Stack>

      <Table>
        <NoSsr>
          <TableHead>
            <TableRow>
              {headerRows.map((row, index) => (
                <TableCell
                  align={row.align}
                  key={index}
                  sx={{
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                  }}
                >
                  {row.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        </NoSsr>
        <TableBody>
          {rows?.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                borderColor: "1px solid #EFEFEF !important",
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  fontSize: "0.9375rem",
                  textTransform: "capitalize",
                }}
              >
                {task?.[index]?.username}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "0.9375rem",
                  textTransform: "capitalize",
                }}
              >
                {task?.[index]?.phone}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "0.9375rem",
                  textTransform: "capitalize",
                }}
              >
                {row?.name}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "0.9375rem",
                  textTransform: "capitalize",
                }}
              >
                {row?.name}
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "0.9375rem",
                  textTransform: "capitalize",
                }}
              >
                <Typography sx={{ color: "SBLACK" }}>
                  {handleGetFullDateWithoutTime(task?.[index]?.due_on)}
                </Typography>
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  fontSize: "0.9375rem",
                  textTransform: "capitalize",
                }}
              >
                <ToggleOnIcon SX={{ color: "green" }} />
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  fontSize: "0.9375rem",
                  textTransform: "capitalize",
                }}
              >
                high
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListingTable;
