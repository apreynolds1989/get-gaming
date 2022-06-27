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
                        xs: 200,
                        sm: 250,
                        md: 325,
                        lg: 400,
                        xl: 450,
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