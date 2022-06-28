import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

export const EventCard = ({ isMobileSize, date, time, location, openTo }) => {

    return (
        <Box
            display="flex"
            flexDirection={'column'}
            justifyContent="center"
            alignItems="center"
            mb={5}
            sx={{
                marginTop: 5,
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
                    borderRadius: 5,
                    minWidth: 200, 
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
                            <Typography color='#201C77'>
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
                            <Typography color='#201C77'>
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
                        <Typography color='#201C77'>
                            {location}
                        </Typography>
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
                        <Typography color='#201C77'>
                            {openTo}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );  
};