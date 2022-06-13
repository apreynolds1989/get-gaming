import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { ReactComponent as GetGamingLogo } from './img/GetGamingLogo.svg';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';

const pages = ['Home', 'Library', 'Gallery', 'Contact'];

const ResponsiveAppBar = () => {
    return (
        <AppBar position='fixed' style={{ backgroundColor: 'white' }}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <GetGamingLogo />
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{ my: 2, color: '#6B3FA0', display: 'block', fontSize: 18 }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default ResponsiveAppBar;