import React from 'react';
import { Card, CardContent, Typography, Box, Link } from '@mui/material';
import mapIcon from './img/mapIcon.png'

export const EventCard = ({ isMobileSize, date, time, address, location, openTo }) => {

    return (
        <Box
            display="flex"
            flexDirection={'column'}
            justifyContent="center"
            alignItems="center"
            mb={5}
            sx={{
                marginTop: 5,
                marginX: isMobileSize ? 0 : 'auto',
            }}
        >
            <Typography
                variant={isMobileSize ? 'h4' : 'h3'} 
                color='#6B3FA0' 
                sx={{
                    fontWeight: 'bold',
                }}
            >
                UPCOMING EVENT
            </Typography>
            <Card 
                sx={{ 
                    borderRadius: isMobileSize ? 0 : 5,
                    minWidth: isMobileSize ? '100VW' : '200px', 
                    px: 7, 
                    mt: 1, 
                    bgcolor: '#F0ECF6' 
                }}
            >
                <CardContent>
                    <Box 
                        display="flex" 
                        flexDirection='row' 
                        justifyContent='space-between' 
                        py={1}
                    >
                        <Box 
                            flexDirection='column'
                            textAlign='center'
                            paddingRight={3}
                        >
                            <Typography 
                                fontWeight='bold'
                                color='#6B3FA0'
                            >
                                Date
                            </Typography>
                            <Typography color='#201C77' sx={{ paddingTop: 0.7 }}>
                                {date}
                            </Typography>
                        </Box>
                        <Box 
                            flexDirection='column'
                            paddingLeft={3}
                        >
                            <Typography 
                                fontWeight='bold'
                                color='#6B3FA0'
                            >
                               Time
                            </Typography>
                            <Typography color='#201C77' sx={{ paddingTop: 0.7 }}>
                                {time}
                            </Typography>
                        </Box>
                    </Box>
                    <Box 
                        flexDirection='column' 
                        textAlign='center' 
                        py={1}
                    >
                        <Typography 
                            fontWeight='bold'
                            color='#6B3FA0'
                        >
                            Location
                        </Typography>
                        <Link href={address} sx={{textDecoration: 'none', color: '#201C77'}}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center'
                                }}
                            >
                                <img src={mapIcon} alt='Google Map Icon' height={30} />
                                <Box
                                    sx={{
                                        paddingTop: 0.7
                                    }}
                                >{location}</Box>
                            </Box>
                        </Link>
                        {/* <Typography color='#201C77'>
                            {location}
                        </Typography> */}
                    </Box>
                    <Box 
                        flexDirection='column' 
                        textAlign='center' 
                        py={1}
                    >
                        <Typography 
                            fontWeight='bold'
                            color='#6B3FA0'
                        >
                            Open to:
                        </Typography>
                        <Typography color='#201C77' sx={{ paddingTop: 0.7 }}>
                            {openTo}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );  
};