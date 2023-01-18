import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Box, Stack } from "@mui/material";

import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const MarketingSocialCards = ({ data }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="w-full text-white">
      <div className="bg-gray-800 shadow-lg p-1 rounded-lg my-2">
        <div className="p-2">
          <div className="flex ">
            <img
              className="w-20 h-20 xl:w-20 xl:h-20 rounded-lg"
              src={data?.img?.slice(0,4)==="https"?data.img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"}
              alt=""
            />

            <div className="flex justify-between w-full">
              <a href="#" className="px-2 flex flex-col w-full justify-between">
              <Typography variant="body2" className="text-gray-300 items-center justify-start text-md xl:text-lg flex ">
                {data?.social?.platform==="Y"?<YouTubeIcon className="mr-1 flex flex-col text-red-500" />:<InstagramIcon className="mr-1 flex flex-col text-pink-500" />}
                {data?.title}
              </Typography>
              <div className="w-full flex-row flex items-center gap-6 border-green-300 pt-2 ">
                <button className="justify-center p-1 flex items-center gap-1 text-gray-400">
                  <FavoriteIcon className="text-md" />
                  <p className="font-semibold">{data?.reactions_count}</p>
                </button>
                <button className="justify-center p-1 flex button items-center gap-1 text-gray-400">
                  <ChatBubbleIcon />
                  <p className="font-semibold">{data?.comments_count}</p>
                </button>
                <button className="justify-center p-1 flex button items-center gap-1 text-gray-400">
                  <RemoveRedEyeIcon />
                  <p className="font-semibold">{data?.reached_to}</p>
                </button>
              </div>
              </a>
            </div>

          </div>
        </div>
      </div>
      {/*<CardMedia
        className="rounded-xl"
        component="img"
        height="194"
        image={data?.img?.slice(0,4)==="https"?data.img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"}
        //image={data?.image}
        alt="Thumbnail"
      />
      <div className="p-3">
        <Typography variant="body2" className="text-gray-500 flex flex-row">
          {data?.social?.platform==="Y"?<YouTubeIcon className="mr-1 flex flex-col text-red-500" />:<InstagramIcon className="mr-1 flex flex-col text-pink-500" />}
          <p>
            {data?.title}
          </p>
        </Typography>
        <div className="flex items-center gap-6 border-green-300 pt-2 px-2">
          <button className="w-1/3 justify-center bg-gray-100 rounded-full p-1 flex items-center gap-1 text-gray-400">
            <FavoriteIcon />
            <p className="font-semibold">{data?.reactions_count}</p>
          </button>
          <button className="w-1/3 justify-center bg-gray-100 rounded-full p-1 flex button items-center gap-1 text-gray-400">
            <ChatBubbleIcon />
            <p className="font-semibold">{data?.comments_count}</p>
          </button>
          <button className="w-1/3 justify-center bg-gray-100 rounded-full p-1 flex button items-center gap-1 text-gray-400">
            <RemoveRedEyeIcon />
            <p className="font-semibold">{data?.reached_to}</p>
          </button>
        </div>
      </div>*/}
    </div>
  );
};

export default MarketingSocialCards;
