import React from "react";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { ShoppingCart } from "@mui/icons-material";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import ShortTextOutlinedIcon from "@mui/icons-material/ShortTextOutlined";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Fab from "@mui/material/Fab";
import { useRouter } from "next/router";
import Tooltip from "@mui/material/Tooltip";
import { checkCategoryStatus } from "../../../utils/data-modifiers";
const InProgressStrategy = ({ data }) => {
  const router = useRouter();
  return (
    <a
      href="#"
      class="block my-2 p-4 border rounded-lg shadow-md bg-gray-800 border-gray-700 hover:bg-gray-900"
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-300">
          <AssignmentOutlinedIcon /> {data?.task}
        </h5>
        <Tooltip title="Add Content">
          <Fab
            sx={{ background: "aqua" }}
            onClick={() =>
              router.push({
                pathname: "/module/content/create_content/NewContent",
                query: { key: data?.key },
              })
            }
          >
            <AddIcon sx={{ color: "red" }} />
          </Fab>
        </Tooltip>
      </Stack>
      <span class="bg-gray-100 gap-1 text-green-300 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-green-300">
        <AssignmentIndOutlinedIcon />
        {data?.assigned_to}
      </span>
      <span class="bg-gray-100 gap-1 text-indigo-300 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-indigo-300">
        <OfflineBoltOutlinedIcon />
        {data?.points}
      </span>
      <span class="bg-gray-100 gap-1 text-orange-300 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-orange-300">
        <ShortTextOutlinedIcon />
        {checkCategoryStatus(data?.keyword)}
      </span>
    </a>
  );
};

export default InProgressStrategy;
