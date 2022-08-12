import {
  Box,
  Typography,
  Avatar,
  Button,
  Tooltip,
  AvatarGroup,
  lighten,
  styled
} from '@mui/material';
import { formatDistance, subMinutes, subHours } from 'date-fns';
import Label from 'src/components/Label';
import AlarmTwoToneIcon from '@mui/icons-material/AlarmTwoTone';
import Link from 'src/components/Link';

const MeetingBox = styled(Box)(
  ({ theme }) => `
          background-color: ${lighten(theme.colors.alpha.black[10], 0.5)};
          margin: ${theme.spacing(2)} 0;
          border-radius: ${theme.general.borderRadius};
          padding: ${theme.spacing(2)};
    `
);

const RootWrapper = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(2.5)};
  `
);


function SidebarContent() {
  return (
    <RootWrapper>
      <Box display="flex" pb={1} mt={4} alignItems="center">
        <Typography
          sx={{
            mr: 1
          }}
          variant="h3"
        >
          Meetings
        </Typography>
        <Label color="success">
          <b>2</b>
        </Label>
      </Box>
      <MeetingBox>
        <Typography variant="h4">Daily Design Meeting</Typography>

        <Box py={3} display="flex" alignItems="flex-start">
          <AlarmTwoToneIcon />
          <Box pl={1}>
            <Typography
              variant="subtitle2"
              sx={{
                lineHeight: 1
              }}
              color="text.primary"
            >
              10:00 - 11:30
            </Typography>
            <Typography variant="subtitle1">
              {formatDistance(subMinutes(new Date(), 12), new Date(), {
                addSuffix: true
              })}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <AvatarGroup>
            <Tooltip arrow title="View profile for Remy Sharp">
              <Avatar
                sx={{
                  width: 28,
                  height: 28
                }}
                component={Link}
                href="#"
                alt="Remy Sharp"
                src="/static/images/avatars/1.jpg"
              />
            </Tooltip>
            <Tooltip arrow title="View profile for Travis Howard">
              <Avatar
                sx={{
                  width: 28,
                  height: 28
                }}
                component={Link}
                href="#"
                alt="Travis Howard"
                src="/static/images/avatars/2.jpg"
              />
            </Tooltip>
            <Tooltip arrow title="View profile for Craig Vaccaro">
              <Avatar
                sx={{
                  width: 28,
                  height: 28
                }}
                component={Link}
                href="#"
                alt="Craig Vaccaro"
                src="/static/images/avatars/3.jpg"
              />
            </Tooltip>
          </AvatarGroup>

          <Button variant="contained" size="small">
            Attend
          </Button>
        </Box>
      </MeetingBox>

      <MeetingBox>
        <Typography variant="h4">Investors Council Meeting</Typography>

        <Box py={3} display="flex" alignItems="flex-start">
          <AlarmTwoToneIcon />
          <Box pl={1}>
            <Typography
              variant="subtitle2"
              sx={{
                lineHeight: 1
              }}
              color="text.primary"
            >
              14:30 - 16:15
            </Typography>
            <Typography variant="subtitle1">
              {formatDistance(subHours(new Date(), 4), new Date(), {
                addSuffix: true
              })}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <AvatarGroup>
            <Tooltip arrow title="View profile for Travis Howard">
              <Avatar
                sx={{
                  width: 28,
                  height: 28
                }}
                component={Link}
                href="#"
                alt="Travis Howard"
                src="/static/images/avatars/4.jpg"
              />
            </Tooltip>
            <Tooltip arrow title="View profile for Craig Vaccaro">
              <Avatar
                sx={{
                  width: 28,
                  height: 28
                }}
                component={Link}
                href="#"
                alt="Craig Vaccaro"
                src="/static/images/avatars/5.jpg"
              />
            </Tooltip>
          </AvatarGroup>

          <Button variant="contained" size="small">
            Attend
          </Button>
        </Box>
      </MeetingBox>
    </RootWrapper>
  );
}

export default SidebarContent;
