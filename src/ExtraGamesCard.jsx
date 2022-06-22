import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

export const ExtraGamesCard = () => {

    return (
        <Box
        display="flex"
        flexDirection={'column'}
        justifyContent="center"
        alignItems="center"
        mb={5}
        >
            <Typography 
            variant='h4' 
            color='transparent' 
            sx={{ fontWeight: 'bold' }}
            >
                PlaceHolder
            </Typography>
            <Card 
            sx={{ 
                borderRadius: 5,
                minWidth: 150, 
                maxWidth: 500, 
                px: 3,
                mx: 5, 
                mt: 1, 
                bgcolor: '#F0ECF6' 
              }}
            >
                <CardContent>
                    <Box 
                    display="flex" 
                    justifyContent='center' 
                    >
                       <Typography 
                        variant='h6'
                        fontWeight={'bold'} 
                        color='#6B3FA0'
                        borderBottom={1} 
                        borderColor={'#6B3FA0'}
                        marginBottom={1}
                        >
                            Extras and Filler Games
                        </Typography>
                    </Box>
                    <Box
                    display='flex'
                    color='#201C77'
                    >
                        <ul>
                            <li>Hive</li>
                            <li>SpyFall</li>
                            <li>The Resistance</li>
                            <li>Elevenses</li>
                            <li>Santorini</li>
                        </ul>
                    </Box>
                    <Box 
                    flexDirection={'column'}
                    textAlign={'left'} 
                    py={1}
                    >
                        <Typography 
                        variant='h6'
                        fontWeight={'bold'} 
                        color='#6B3FA0'
                        borderBottom={1} 
                        borderColor={'#6B3FA0'}
                        marginBottom={1}
                        >
                            Have a Favourite of Your Own?
                        </Typography>
                        <Typography  
                        color='#201C77'
                        marginBottom={1}
                        >
                            Feel free to bring along your own games! <br />
                            If we are not comfortable with the rules of your game,
                            you will be responsible for teaching the rules and 
                            moderation of the game.
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );  
};