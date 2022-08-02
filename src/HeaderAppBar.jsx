import React from 'react';
import { NavLink } from "react-router-dom";
import { AppBar, Container, Toolbar, Box, Button } from '@mui/material';
// import { ReactComponent as GetGamingLogo } from './img/GetGamingLogo.svg';
import GetGamingPNG from './img/GetGaming.png'

const pages = [
    {
        title: 'Home',
        route: 'get-gaming/',
    },
    {
        title: 'Library',
        route: 'get-gaming/Library',
    },
    {
        title: 'Gallery',
        route: 'get-gaming/Gallery',
    },
    {
        title: 'Contact',
        route: 'get-gaming/ContactForm'
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
                    {/* {!isMobileSize && <Link to='/get-gaming/'><GetGamingLogo /></Link>} */}
                    {!isMobileSize && <a href='/get-gaming/'><img src={GetGamingPNG} alt='Get Gaming Logo' width={150} /></a>}
                    <Box 
                        sx={{ 
                            flexGrow: 1, 
                            display: 'flex',
                            justifyContent: {
                                xs: 'center',
                                sm: 'flex-end',
                            }
                        }}
                    >
                        {pages.map((page) => (
                            <Button 
                                key={page.title}
                                sx={{
                                    fontSize: {
                                        xs: '14px',
                                        sm: '18px',
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