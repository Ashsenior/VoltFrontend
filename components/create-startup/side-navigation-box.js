import { Box, Container, Typography } from "@mui/material";
import React from "react";
import FoundationIcon from "@mui/icons-material/Foundation";
import PsychologyIcon from "@mui/icons-material/Psychology";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRouter } from "next/router";
const steps = [
  { stepname: "Step 1", icon: <FoundationIcon sx={{ mr:1}}/>, link:'/create-startup/step-1' },
  { stepname: "Step 2", icon: <PsychologyIcon sx={{ mr:1}}/>, link:'/create-startup/step-2' },
  { stepname: "Step 3", icon: <TipsAndUpdatesIcon sx={{ mr:1}}/>,link:'/create-startup/step-3' },
  { stepname: "Step 4", icon: <DeviceHubIcon sx={{ mr:1}}/>,link:'/create-startup/step-4' },
];
const SideNavigationBox = () => {
  const router = useRouter();
  return (
    <>
      <Box>
        {steps.map((step, index) => (
          <Box
            key={index}
            mb={1}
            p={2}
            onClick={()=>router.push(`${step.link}`)}
            sx={{
              background: router.pathname.includes(step.link)? "#00005C" :'#fff',
              borderRadius: "12px",
              maxWidth: "200px",
              display:'flex',
              justifyContent:'space-between',
              cursor:'pointer',
              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            }}
          >
            <Typography
              fontWeight={700}
              fontSize="18px"
              sx={{ lineHeight: "30px", color: "white", display:'flex', justifyContent:'space-between', alignItems:'center', 
              color:router.pathname.includes(step.link)? "#fff" :'#000'
             }}

            >
            {step?.icon}
            {step?.stepname}

            </Typography>


            <ChevronRightIcon  sx={{color:'white'}}/>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default SideNavigationBox;
