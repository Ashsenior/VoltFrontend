import { Box, alpha, lighten, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

import Sidebar from './Sidebar';
import Header from './Header';
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";

const SidebarLayout = ({ children }) => {
  const theme = useTheme();

  let { user } = useContext(AuthContext);

  return (
    <>
      <Box
      className='bg-gray-800'
        sx={{
          flex: 1,
          height: '100%',

          '.MuiPageTitle-wrapper': {
            marginBottom: `${theme.spacing(4)}`,
            boxShadow:
              theme.palette.mode === 'dark'
                ? `0 1px 0 ${alpha(
                  lighten(theme.colors.primary.main, 0.7),
                  0.15
                )}, 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)`
                : `0px 2px 4px -3px ${alpha(
                  theme.colors.alpha.black[100],
                  0.1
                )}, 0px 5px 12px -4px ${alpha(
                  theme.colors.alpha.black[100],
                  0.05
                )}`
          }
        }}
      >
        <Header />
        <Sidebar />
        <Box
          sx={{
            position: 'relative',
            zIndex: 5,
            display: 'block',
            bgcolor: "rgb(249, 253, 255)",
            flex: 1,
            pt: `${theme.header.height}`,
            [theme.breakpoints.up('lg')]: {
              ml: `${theme.sidebar.width}`
            }
          }}
        >
          <Box display="block">{children}</Box>
        </Box>
      </Box>
    </>
  );
};

SidebarLayout.propTypes = {
  children: PropTypes.node
};

export default SidebarLayout;
