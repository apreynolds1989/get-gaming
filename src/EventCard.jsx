import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const EventCard = () => {
    return (
        <Box
        display="flex"
        flexDirection={'column'}
        justifyContent="center"
        alignItems="center"
        mb={5}
        >
            <Typography variant='h3' color='#6B3FA0' sx={{ fontWeight: 'bold' }}>
                UPCOMING EVENT
            </Typography>
            <Card sx={{ minWidth: 275, px: 10, mt: 1, bgcolor: '#F0ECF6' }}>
                <CardContent>
                    <Box display="flex" flexDirection={'row'} justifyContent='space-around' py={1}>
                        <Box flexDirection={'column'} textAlign={'center'}>
                            <Typography fontWeight={'bold'}>
                                Date
                            </Typography>
                            <Typography>
                                TBD
                            </Typography>
                        </Box>
                        <Box flexDirection={'column'}>
                            <Typography fontWeight={'bold'}>
                               Time
                            </Typography>
                            <Typography>
                                TBD
                            </Typography>
                        </Box>
                    </Box>
                    <Box flexDirection={'column'} textAlign={'center'} py={1}>
                        <Typography fontWeight={'bold'}>
                            Location
                        </Typography>
                        <Typography>
                            TBD
                        </Typography>
                    </Box>
                    <Box flexDirection={'column'} textAlign={'center'} py={1}>
                        <Typography fontWeight={'bold'}>
                            Open to:
                        </Typography>
                        <Typography>
                            TBD
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );  
};