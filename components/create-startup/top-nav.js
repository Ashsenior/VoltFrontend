import { Box, Container, Fab, IconButton, Typography } from "@mui/material";
import React from "react";
import FoundationIcon from "@mui/icons-material/Foundation";
import PsychologyIcon from "@mui/icons-material/Psychology";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const steps = [
  { stepname: "1", icon: <FoundationIcon sx={{color:'white', }}/> },
  { stepname: "2", icon: <PsychologyIcon sx={{color:'white', }}/> },
  { stepname: "3", icon: <TipsAndUpdatesIcon sx={{color:'white',}}/> },
  { stepname: "4", icon: <DeviceHubIcon sx={{color:'white', }}/> },
];
const TopNavigationBox = () => {
  return (
    <>
      <Box>
        {steps.map((step, index) => (
        
            <Fab key={index} sx={{mb:2, background:'#00005C !important',  textAlign:'center', mr:1}}>
                {step.icon}
            </Fab>

        ))}
      </Box>
    </>
  );
};

export default TopNavigationBox;
