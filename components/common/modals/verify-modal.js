import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "next-share";
import Image from "next/image";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const VerifyModal = ({
  handleOpenModal,
  handleCloseModal,
  handleAction,
  handleRoute,
  text,
  eventId,
}) => {
  const [open, setOpen] = useState(false);

  const openShareModal = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    handleCloseModal();
  };

  return (
    <>
      <Dialog
        open={handleOpenModal}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <IconButton
          onClick={handleCloseModal}
          sx={{ position: "absolute", top: 0, right: 0 }}
        >
          <CloseIcon />
        </IconButton>
        <Box sx={{ p: 5 }}>
          <Box sx={{}}>
            <Image
              src="/static/images/badge.png"
              width={164}
              height={164}
              alt="Created"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "150px",
              }}
            />
          </Box>
          <DialogTitle>
            <Typography
              textAlign="center"
              sx={{ color: "#000", fontSize: "40px" }}
              fontWeight="1000"
              variant="h1"
            >
              Congratualations🥳🎉
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Typography variant="h4" textAlign="center">
              You’ve successfully recieved the batch.{" "}
              {/* <span style={{ fontWeight: 700 }}>{text}</span>. */}
            </Typography>
          </DialogContent>

          <Box sx={{ mt: 2 }}>
            <Typography variant="h5" textAlign="center">
              Share your Acheivements Socially via
              {/* <span style={{ fontWeight: 700 }}>{text}</span>. */}
            </Typography>
          </Box>
          <Stack
            direction={"row"}
            gap={3}
            sx={{ m: 3 }}
            justifyContent="center"
          >
            <FacebookShareButton
              url={`https://starticfield.com`}
              quote={
                "Startic Field is an app which is used for smart management of startups using AI/ML models ."
              }
              title={
                "Startic Field is an app which is used for smart management of startups using AI/ML models ."
              }
              hashtag={"#bookview"}
              windowWidth={1000}
              windowHeight={1000}
              style={{ borderRadius: "50%" }}
            >
              <FacebookIcon size={42} />
            </FacebookShareButton>
            <TelegramShareButton
              url={`https://starticfield.com`}
              title={
                "Startic Field is an app which is used for smart management of startups using AI/ML models ."
              }
              itemRef="/book.png"
            >
              <TelegramIcon size={42} />
            </TelegramShareButton>

            <WhatsappShareButton
              url={`https://starticfield.com`}
              title={
                "Startic Field is an app which is used for smart management of startups using AI/ML models ."
              }
              itemRef="/startups-amico.png"
            >
              <WhatsappIcon size={42} />
            </WhatsappShareButton>

            <EmailShareButton
              url={`https://starticfield.com`}
              subject={
                "Startic Field is an app which is used for smart management of startups using AI/ML models"
              }
              body="body"
              itemRef="/startups-amico.png"
            >
              <EmailIcon size={42} />
            </EmailShareButton>
          </Stack>
        </Box>
      </Dialog>
    </>
  );
};

export default VerifyModal;
