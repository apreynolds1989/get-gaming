import React from "react";
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { HeaderAppBar } from './HeaderAppBar';
import { Footer } from './Footer';
import { EventGallery } from "./EventGallery";
import { Link } from "react-router-dom";
import Event1Cover from './photos/Aug26-2022/IMG_2629.jpeg';

export const Galleries = () => {
    const isMobileSize = useMediaQuery('(max-width:600px)');

    return (
        <>
            <HeaderAppBar isMobileSize={isMobileSize} />
            <Box
                display='flex'
                flexDirection='column'
                maxWidth='700px'
                mx='auto'
                sx={{
                    marginTop: isMobileSize ? 10 : 15,
                    height: {
                        xs: '40vh',
                        md: '50vh',
                        xl: '60vh'
                    },
                    marginBottom: 10,
                }}
            >
                <Typography 
                    variant={isMobileSize ? 'h4' : 'h3'} 
                    color='#6B3FA0'
                    borderBottom={1}
                    borderColor='#6B3FA0' 
                    sx={{ 
                        fontWeight: 'bold',
                    }}
                >
                    Event Galleries
                </Typography>
                <Grid container spacing={2} justifyContent='center' sx={{marginX: 'auto'}}>
                    <Grid item xs={12} md={4}>
                        <Link to={'/Aug26-2022-Gallery'}>
                            <EventGallery 
                                coverImg={Event1Cover}
                                attendees='Get Coding'
                                date='August 26 2022'
                            />
                        </Link>
                    </Grid>
                </Grid>
            </Box>
            <Footer isMobileSize={isMobileSize} />
        </>
    );
}
