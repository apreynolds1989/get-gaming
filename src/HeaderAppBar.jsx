import React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { ReactComponent as GetGamingLogo } from './img/GetGamingLogo.svg';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';

const pages = [
    {
        title: 'Home',
        route: '',
    },
    {
        title: 'Library',
        route: 'Library',
    },
    {
        title: 'Gallery',
        route: 'Gallery',
    },
    {
        title: 'Contact',
        route: 'ContactForm'
    },
];

export const HeaderAppBar = () => {
    return (
        <AppBar 
        position='fixed' 
        style={{ backgroundColor: 'white' }}
        >
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Link to='/'><GetGamingLogo /></Link>
                    <Box 
                    sx={{ 
                        flexGrow: 1, 
                        display: 
                            { xs: 'none', 
                              md: 'flex', 
                              justifyContent: 'flex-end' 
                            }
                     }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page.title}
                                sx={{ 
                                    my: 2, 
                                    color: '#6B3FA0', 
                                    display: 'block', 
                                    fontSize: 18 
                                }}
                            >
                                <Link to={`/${page.route}`}>{page.title}</Link>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};