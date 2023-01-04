import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import TextTransition, { presets } from "react-text-transition";
import VerifyModal from "../common/modals/verify-modal";
const TEXTS = ["Happy", "17Th", "Birthday", "Kiddo!"];

const Congratualation = () => {
  const [index, setIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 5,
        flexDirection: "column",
      }}
    >
      <div>
        <Typography
          sx={{ mb: 3, fontSize: "50px", fontWeight: 1000 }}
          variant="h1"
        >
          Hooray!🥳🎉
        </Typography>
      </div>
      <>
        <Typography variant="h1">
          You have won a new Marketing Genius Badge
        </Typography>
      </>
      <Stack direction={"row"} alignItems="center">
        <Image
          src="/static/images/badge.png"
          width={500}
          height={500}
          alt="Image"
        />
        <Box>
          <Typography variant="h3" sx={{ mb: 3 }}>
            Marketing
          </Typography>
          <Typography sx={{ mb: 1 }} variant="h6">
            Issued by Startic Field
          </Typography>
          <Typography variant="h4" sx={{ mb: 3 }}>
            This badge earner has an understanding of the possibilities and
            opportunities that marketing, analytics and big data bring to new
            applications in any industry.
          </Typography>
          <button
            type="button"
            className="inline-flex items-center  text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={() => handleOpen()}
          >
            Verify Badge
          </button>
          <button
            type="button"
            className="inline-flex items-center  text-black bg-yellow-300 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 dark:bg-yellow-200 dark:hover:bg-yellow-400 dark:focus:ring-gray-700 dark:border-gray-700"
            // onClick={() => handleGitHubAuthentication()}
          >
            Share Badge
          </button>
        </Box>
        <VerifyModal
          handleOpenModal={open}
          handleCloseModal={handleCloseModal}
        />
      </Stack>
    </Box>
  );
};

export default Congratualation;
