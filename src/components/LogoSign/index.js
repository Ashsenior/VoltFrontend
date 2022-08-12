import {
    styled, Typography,
} from '@mui/material';
import Link from 'src/components/Link';

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        display: flex;
        text-decoration: none;
        width: ${theme.sidebar.width};
        margin: 0 auto;
        font-weight: ${theme.typography.fontWeightBold};
        align-items: center;
            img {
                  width: 32%;
                  height: 32%;
                  display: block;
                  padding: ${theme.spacing(0)} ${theme.spacing(1)};
            }
            ${Typography} {
            padding: ${theme.spacing(0)} ${theme.spacing(1)};
            }
`
);



function Logo({ theme }) {
  return (
      <LogoWrapper href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/static/images/logo/logo.png" alt="NextJS" />
              <Typography sx={{color:`${theme === 'dark' ? 'black' : 'white' }` ,  underline:"none"}} variant="h3">Static Field</Typography>
      </LogoWrapper>
  );
}

export default Logo;
