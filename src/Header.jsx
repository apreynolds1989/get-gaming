import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import {ReactComponent as GetGamingLogo} from './img/GetGamingLogo.svg';

const ResponsiveAppBar = () => {
    return (
        <AppBar position='fixed' color='transparent'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <GetGamingLogo />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default ResponsiveAppBar;