import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
// import Logo from './img/GetGamingLogo.svg';

const ResponsiveAppBar = () => {
    return (
        <AppBar position='fixed' color='transparent'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    {/* <img src={Logo} alt='Get Gaming Logo' /> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default ResponsiveAppBar;