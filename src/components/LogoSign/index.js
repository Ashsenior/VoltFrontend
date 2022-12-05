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
import Link from 'src/components/Link';

const LogoWrapper = styled(Link)(
    ({ theme }) => `
        width: 70px;
        margin: 0 ;
        display: block;
            img {
                  width: 100%;
                  height: 250%;
                  display: block;
                  padding: 0;
            }
`
);

function Logo() {

    return (
        <a style={{width:"70px"}} href="/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/static/images/logo/logo.png" alt="NextJS" />
        </a>

    );
}

export default Logo;