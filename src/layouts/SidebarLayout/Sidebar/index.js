import { useContext } from 'react';
import Scrollbar from 'src/components/Scrollbar';
import { SidebarContext } from 'src/contexts/SidebarContext';

import {
  Box,
  Drawer,
  alpha,
  styled,
  Divider,
  useTheme,
  Button,
  lighten,
  darken, Typography
} from '@mui/material';

import SidebarMenu from './SidebarMenu';
import Logo from 'src/components/LogoSign';
import { LogoutRounded } from "@mui/icons-material";
import Link from "next/link";

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.colors.alpha.trueWhite[70]};
        position: relative;
        z-index: 7;
        height: 100%;
        padding-bottom: 68px;
`
);

function Sidebar() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const theme = useTheme();

  return (
    <>
      <SidebarWrapper
        sx={{
          display: {
            xs: 'none',
            lg: 'inline-block'
          },
          position: 'fixed',
          left: 0,
          top: 0,
          background:
            theme.palette.mode === 'dark'
              ? alpha(lighten(theme.header.background, 0.1), 0.5)
              : darken(theme.colors.alpha.black[100], 0.5),
          boxShadow:
            theme.palette.mode === 'dark' ? theme.sidebar.boxShadow : 'none'
        }}
      >
        <Scrollbar className="bg-white">
          <Box margin={0} >
            <Box
              margin={0}
              sx={{
                width: 270
              }}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'start'}
            >
              <Logo />
              <Link href={'/'}>
                <Typography variant="h3" marginLeft={2} >
                  Startic Field
                </Typography>
              </Link>
            </Box>
          </Box>
          <SidebarMenu />
        </Scrollbar>
        <Box p={2}>
          <Button
            href="/"
            variant="contained"
            color="primary"
            size="small"
            endIcon={<LogoutRounded />}
            fullWidth
          >
            Log out
          </Button>
        </Box>
      </SidebarWrapper>
      <Drawer
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`
        }}
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
      >
        <SidebarWrapper
          sx={{
            background:
              theme.palette.mode === 'dark'
                ? theme.colors.alpha.white[1]
                : darken(theme.colors.alpha.black[100], 0.5)
          }}
        >
          <Scrollbar>
            <Box margin={0} >
              <Box
                margin={0}
                sx={{
                  width: 250
                }}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'start'}
              >
                <Logo />
                <Link href={'/'}>
                  <Typography variant="h3" marginLeft={2} >
                    Startic Field
                  </Typography>
                </Link>
              </Box>
            </Box>
            <SidebarMenu />
          </Scrollbar>
          <Box p={2}>
            <Button
              href="/"
              variant="contained"
              color="primary"
              size="small"
              endIcon={<LogoutRounded />}
              fullWidth
            >
              Log out
            </Button>
          </Box>
        </SidebarWrapper>

      </Drawer>
    </>
  );
}

export default Sidebar;
