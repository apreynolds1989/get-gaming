import React from 'react';
import background from './img/Root-bg.jpeg';
import { Box, Container } from '@mui/material';
import { ReactComponent as GetGamingLogo } from './img/GetGamingLogo.svg';

export const Splash = () => {
    return (
        <>
            <Container 
                maxWidth='false'
                disableGutters
                sx={{
                    marginX: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    display: {
                        xs: 'none',
                        sm: 'flex',
                    },
                    backgroundImage: `url(${background})`, 
                    backgroundRepeat:'no-repeat',
                    // backgroundPosition: 'center', 
                    backgroundSize: 'cover', 
                    height: {
                        xs: '200px',
                        sm: '250px',
                        md: '325px',
                        lg: '400px',
                        xl: '450px',
                    }, 
                    // width: 'fit' 
                }}
            />
            <Box
                sx={{
                    marginTop: 10,
                    display: {
                        xs: 'flex',
                        sm: 'none'
                    },
                    justifyContent: 'center'
                }}
            >
                <GetGamingLogo />
            </Box>
        </>
    )
}