import React from "react";
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { HeaderAppBar } from './HeaderAppBar';
import { Footer } from './Footer';
import { EventGallery } from "./EventGallery";
import { Link } from "react-router-dom";
import Event1Cover from './photos/GetCodingAug26-2022/IMG_2629.jpeg';
import Event2Cover from './photos/NetBenefit-Sept-14-2022/IMG_2676.jpeg';

export const Galleries = () => {
    const isMobileSize = useMediaQuery('(max-width:600px)');

    return (
        <>
            <HeaderAppBar isMobileSize={isMobileSize} />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '1000px',
                    marginX: 'auto',
                    marginTop: isMobileSize ? 10 : 18,
                    minHeight: {
                        xs: '70vh',
                        sm: '55vh',
                    },
                    marginBottom: {
                        xs: 5,
                        lg: 0,
                    }
                }}
            >
                <Box
                    sx={{
                        maxWidth: '1000px',
                        marginX: 'auto',
                    }}
                >
                    <Typography 
                        variant={isMobileSize ? 'h4' : 'h3'} 
                        color='#6B3FA0'
                        borderBottom={1}
                        borderColor='#6B3FA0' 
                        sx={{ 
                            fontWeight: 'bold',
                            textAlign: isMobileSize ? 'center' : 'left',
                        }}
                    >
                        Event Galleries
                    </Typography>
                </Box>
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
                    <Grid item xs={12} md={4}>
                        <Link to={'/Sept14-2022-Gallery'}>
                            <EventGallery 
                                coverImg={Event2Cover}
                                attendees='Get Coding &amp; NetBenefit'
                                date='September 14 2022'
                            />
                        </Link>
                    </Grid>
                </Grid>
            </Box>
            <Footer isMobileSize={isMobileSize} />
        </>
    );
}
