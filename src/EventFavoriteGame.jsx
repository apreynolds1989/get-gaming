import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react'

export const EventFavoriteGame = ({ isMobileSize, gameSiteURLOne, gameImgURLOne, altOne, gameSiteURLTwo, gameImgURLTwo, altTwo }) => {
  return (
    <Card 
        sx={{ 
            borderRadius: isMobileSize ? 0 : 5,
            minWidth: isMobileSize ? '100vw' : '150px', 
            maxWidth: '500px', 
            px: isMobileSize ? 0 : 12,
            mx: 'auto', 
            my: 5, 
            bgcolor: '#F0ECF6' 
        }}
    >
        <CardContent>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography 
                    variant={isMobileSize ? 'h6' : 'h5'} 
                    sx={{
                        color: '#6B3FA0',
                        borderBottom: '2px solid #6B3FA0',
                        fontWeight: 'bold',
                        textAlign: isMobileSize ? 'center' : 'center',
                    }}
                >
                    Featured Games 
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignContent: 'space-between',
                    }}
                >
                    <Box 
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            paddingTop: 2
                        }}
                    >
                        <a href={gameSiteURLOne}>
                            <img src={gameImgURLOne} alt={altOne} height={200} />
                        </a>
                    </Box>
                    {gameSiteURLTwo && 
                    <Box 
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            paddingTop: 2
                        }}
                    >
                        <a href={gameSiteURLTwo}>
                            <img src={gameImgURLTwo} alt={altTwo} height={200} />
                        </a>
                    </Box>}
                </Box>
            </Box>
        </CardContent>
    </Card>
    // <Card>
    //     <CardContent>
    //         <Box
    //             sx={{
    //                 display: 'flex',
    //                 flexDirection: 'column',
    //             }}
    //         >
    //             <Typography 
    //                 variant={isMobileSize ? 'h5' : 'h4'} 
    //                 // color='#6B3FA0'
    //                 // borderBottom={1}
    //                 // borderColor='#6B3FA0' 
    //                 sx={{
    //                     color: '#6B3FA0',
    //                     borderBottom: '1px solid #6B3FA0',
    //                     fontWeight: 'bold',
    //                     textAlign: isMobileSize ? 'center' : 'left',
    //                 }}
    //             >
    //                 People's Choice: 
    //             </Typography>
    //             <Box>

    //             </Box>
    //             <Typography
    //                 sx={{
    //                     color: '#6B3FA0',
    //                     fontWeight: 'bold',
    //                     paddingLeft: 2,
    //                     alignSelf: 'center'
    //                 }}
    //             >
    //                 {game}
    //             </Typography>
    //         </Box>
    //     </CardContent>
    // </Card>
  );
}