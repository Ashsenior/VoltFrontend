import {
    styled
} from '@mui/material';
import Link from 'src/components/Link';

const LogoWrapper = styled(Link)(
    ({ theme }) => `
        width: 53px;
        margin: 0 ;
        display: block;
            img {
                  width: 250%;
                  height: 250%;
                  display: block;
                  padding: ${theme.spacing(0)} ${theme.spacing(1)};
            }
`
);

function Logo() {

    return (
            <LogoWrapper href="/">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/static/images/logo/logo.png" alt="NextJS" />
            </LogoWrapper>
    );
}

export default Logo;