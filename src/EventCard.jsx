import React from 'react';
import { Card, CardContent, Typography, Box, Link } from '@mui/material';
import mapIcon from './img/mapIcon.png'
import linkedInIcon from './img/linkedInIcon.png'

export const EventCard = ({ isMobileSize, date, time, address, location, openToWebsite, openTo, linkedIn, host, coHostLinkedIn, coHost }) => {

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
                        justifyContent='space-around' 
                        py={1}
                    >
                        <Box
                            sx={{
                                flexDirection: 'column',
                                marginLeft: isMobileSize ? 7 : 3,
                                paddingRight: isMobileSize ? 1 : 3,
                                minWidth: '175px',
                            }}
                        >
                            <Typography 
                                fontWeight='bold'
                                color='#6B3FA0'
                            >
                                Date
                            </Typography>
                            <Typography color='#201C77' sx={{ paddingTop: 0.7, fontSize: isMobileSize ? '14px' : '16px' }}>
                                {date}
                            </Typography>
                        </Box>
                        <Box 
                            flexDirection='column'
                            paddingLeft={3}
                            minWidth={175}
                        >
                            <Typography 
                                fontWeight='bold'
                                color='#6B3FA0'
                            >
                               Time
                            </Typography>
                            <Typography color='#201C77' sx={{ paddingTop: 0.7, fontSize: isMobileSize ? '14px' : '16px' }}>
                                {time}
                            </Typography>
                        </Box>
                    </Box>
                    <Box 
                        display="flex" 
                        flexDirection='row' 
                        justifyContent='space-around' 
                        py={1}
                    >
                        <Box 
                            sx={{
                                flexDirection: 'column',
                                marginLeft: isMobileSize ? 7 : 3,
                                paddingRight: isMobileSize ? 1 : 3,
                                minWidth: '175px',
                            }}
                        >
                            <Typography 
                                fontWeight='bold'
                                color='#6B3FA0'
                            >
                                Location
                            </Typography> 
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',   
                                }}
                            >
                                <Link href={address} sx={{textDecoration: 'none', color: '#201C77'}}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            
                                        }}
                                    >
                                        <img src={mapIcon} alt='Google Map Icon' height={30} />
                                        <Typography color='#201C77' sx={{ paddingTop: 0.7, paddingLeft: 1, fontSize: isMobileSize ? '14px' : '16px' }}>
                                            {location}
                                        </Typography>
                                    </Box>
                                </Link>
                            </Box>                        
                        </Box>
                        <Box 
                            flexDirection='column'
                            paddingLeft={3}
                            minWidth={175}
                        >
                            <Typography 
                                fontWeight='bold'
                                color='#6B3FA0'
                            >
                                Open to:
                            </Typography>
                            <Box
                                flexDirection='column'
                            >
                                <Typography color='#201C77' sx={{ paddingTop: 0.7, fontSize: isMobileSize ? '14px' : '16px' }}>
                                    <Link href='https://www.getcoding.ca/' sx={{ color: '#201C77'}}>Get Coding</Link> &amp;
                                </Typography>
                                <Typography color='#201C77' sx={{ paddingTop: 0.7, fontSize: isMobileSize ? '14px' : '16px' }}>
                                    <Link href={openToWebsite} sx={{ color: '#201C77'}}>{openTo}</Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box 
                        sx={{
                            flexDirection: 'column',
                            textAlign: 'center',
                            paddingY: 1,
                            marginX: 'auto',
                        }}
                    >
                        <Typography 
                            fontWeight='bold'
                            color='#6B3FA0'
                        >
                            Hosted by:
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                maxWidth: 'fit-content',
                                marginX: 'auto',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',   
                                }}
                            >
                                <Link href={linkedIn} sx={{textDecoration: 'none', color: '#201C77'}}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            
                                        }}
                                    >
                                        <img src={linkedInIcon} alt='Google Map Icon' height={30} />
                                        <Typography color='#201C77' sx={{ paddingTop: 0.7, fontSize: isMobileSize ? '14px' : '16px' }}>
                                            {host}
                                        </Typography>
                                    </Box>
                                </Link>
                            </Box> 
                            {
                                coHost &&
                                <Typography 
                                    color='#201C77' 
                                    sx={{
                                        marginX: 'auto', 
                                        paddingTop: 0.7, 
                                        fontSize: isMobileSize ? '14px' : '16px' 
                                    }}
                                >
                                    &amp;
                                </Typography>
                            }
                            {
                                coHost && 
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'center',   
                                    }}
                                >
                                    <Link href={coHostLinkedIn} sx={{textDecoration: 'none', color: '#201C77'}}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                
                                            }}
                                        >
                                            <img src={linkedInIcon} alt='Google Map Icon' height={30} />
                                            <Typography color='#201C77' sx={{ paddingTop: 0.7, fontSize: isMobileSize ? '14px' : '16px' }}>
                                                {coHost}
                                            </Typography>
                                        </Box>
                                    </Link>
                                </Box>  
                            } 
                        </Box>           
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );  
};