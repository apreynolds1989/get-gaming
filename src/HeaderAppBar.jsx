import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { AppBar, Container, Toolbar, Box, Button } from '@mui/material';
import { ReactComponent as GetGamingLogo } from './img/GetGamingLogo.svg';

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

export const HeaderAppBar = ({ isMobileSize }) => {
    
    return (
        <AppBar 
            position='fixed' 
            style={{ backgroundColor: 'white' }}
        >
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    {isMobileSize || <Link to='/'><GetGamingLogo /></Link>}
                    {/* <Link to='/'><GetGamingLogo /></Link> */}
                    <Box 
                        sx={{ 
                            flexGrow: 1, 
                            display: 'flex',
                            justifyContent: {
                                xs: 'center',
                                sm: 'flex-end',
                            }
                                // { xs: 'none', 
                                //   sm: 'flex', 
                                //   justifyContent: 'flex-end' 
                                // }
                        }}
                    >
                        {pages.map((page) => (
                            <Button 
                                key={page.title}
                                sx={{
                                    fontSize: {
                                        xs: 14,
                                        sm: 18,
                                    },
                                }}
                            >
                                <NavLink
                                    style={({ isActive }) => {
                                        return {
                                            my: 2, 
                                            display: 'block',                                           
                                            fontWeight: 'bold',
                                            textDecoration: 'none',
                                            color: isActive ? '#000000' : '#6B3FA0',
                                        };
                                    }}
                                    
                                    to={`/${page.route}`}
                                    key={page.title}
                                >
                                    {page.title}
                                </NavLink>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};