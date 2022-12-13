import { useContext } from "react";
import { useRouter } from "next/router";

import {
  ListSubheader,
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem,
} from "@mui/material";
import NextLink from "next/link";
import { SidebarContext } from "src/contexts/SidebarContext";
import MmsTwoToneIcon from "@mui/icons-material/MmsTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import DisplaySettingsTwoToneIcon from "@mui/icons-material/DisplaySettingsTwoTone";
import { Biotech, Home } from "@mui/icons-material";
<<<<<<< HEAD
import PsychologyIcon from '@mui/icons-material/Psychology';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PostAddIcon from '@mui/icons-material/PostAdd';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import Diversity2TwoToneIcon from '@mui/icons-material/Diversity2TwoTone';
=======
import PsychologyIcon from "@mui/icons-material/Psychology";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PostAddIcon from "@mui/icons-material/PostAdd";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
>>>>>>> 7d91da99abdfa484533d73f9a9e7df9c49aaabc0

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};
    marginTop: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(["color"])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.06)};
            color: ${theme.colors.alpha.trueWhite[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
                  "transform",
                  "opacity",
                ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);

function SidebarMenu() {
  const { closeSidebar } = useContext(SidebarContext);
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <MenuWrapper>
        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Dashboards
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/dashboards" passHref>
                  <Button
                    className={currentRoute === "/dashboards" ? "active" : ""}
                    disableRipple
                    onClick={closeSidebar}
                    startIcon={<Home />}
                  >
                    Home
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Modules
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/module/product" passHref>
                  <Button
                    className={
                      currentRoute === "/module/product" ? "active" : ""
                    }
                    disableRipple
                    onClick={closeSidebar}
                    startIcon={<WysiwygIcon />}
                  >
                    Product Module
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/module/strategy" passHref>
                  <Button
                    className={
                      currentRoute === "/module/strategy" ? "active" : ""
                    }
                    disableRipple
                    onClick={closeSidebar}
                    startIcon={<PsychologyIcon />}
                  >
                    Strategy Module
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/module/content" passHref>
                  <Button
                    className={
                      currentRoute === "/module/content" ? "active" : ""
                    }
                    disableRipple
                    onClick={closeSidebar}
                    startIcon={<PostAddIcon />}
                  >
                    Research Module
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/module/marketing" passHref>
                  <Button
                    className={
                      currentRoute === "/module/marketing" ? "active" : ""
                    }
                    disableRipple
                    onClick={closeSidebar}
                    startIcon={<LocalGroceryStoreIcon />}
                  >
                    Marketing Module
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/module/team" passHref>
                  <Button
                    className={
                      currentRoute === '/module/team' ? 'active' : ''
                    }
                    disableRipple
                    onClick={closeSidebar}
                    startIcon={<Diversity2TwoToneIcon />}
                  >
                    Team Module
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Accounts
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <NextLink href="/management/profile" passHref>
                  <Button
                    className={
                      currentRoute === "/management/profile" ? "active" : ""
                    }
                    disableRipple
                    onClick={closeSidebar}
                    startIcon={<AccountCircleTwoToneIcon />}
                  >
                    Profile
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/leaderboards" passHref>
                  <Button
                    className={currentRoute === "/leaderboards" ? "active" : ""}
                    disableRipple
                    onClick={closeSidebar}
                    startIcon={<AccountCircleTwoToneIcon />}
                  >
                    LeaderBoards
                  </Button>
                </NextLink>
              </ListItem>
              <ListItem component="div">
                <NextLink href="/management/profile/settings" passHref>
                  <Button
                    className={
                      currentRoute === "/management/profile/settings"
                        ? "active"
                        : ""
                    }
                    disableRipple
                    onClick={closeSidebar}
                    startIcon={<DisplaySettingsTwoToneIcon />}
                  >
                    Account Settings
                  </Button>
                </NextLink>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
