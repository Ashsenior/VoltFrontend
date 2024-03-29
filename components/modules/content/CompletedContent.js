import React from "react";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { ShoppingCart } from "@mui/icons-material";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import ShortTextOutlinedIcon from "@mui/icons-material/ShortTextOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { Link, Image } from "@nextui-org/react";
import { useRouter } from "next/router";
const CompletedStrategy = ({ data }) => {
  const router = useRouter();
  return (
    <a
      href={"content/create_content/ContentDetails"}
      class="block my-2 p-4 borde rounded-lg shadow-md bg-gray-800 border-gray-700 hover:bg-gray-900"
    >
      <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-300">
        <VerifiedOutlinedIcon /> {data?.title}
      </h5>
      <span class="bg-gray-100 gap-1 text-green-300 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-green-300">
        <AssignmentIndOutlinedIcon />
        @ashsenior
      </span>
      <span class="bg-gray-100 gap-1 text-indigo-300 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-indigo-300">
        <OfflineBoltOutlinedIcon />
        350
      </span>
      <span class="bg-gray-100 gap-1 text-orange-300 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-orange-300">
        <ShortTextOutlinedIcon />
        BRIEF
      </span>
      <br />

      <p class="font-normal mt-2 text-gray-400">{data?.content}</p>
      <img
        className="mt-4 rounded-xl"
        src={
          "https://gbdmagazine.com/wp-content/uploads/2017/10/063918_002-e1527781642890.png"
        }
      />
    </a>
  );
};

export default CompletedStrategy;
