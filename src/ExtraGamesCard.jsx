import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { smallGameInfo } from './gameInfo';

const smallGameNames = Object.keys(smallGameInfo).sort();

export const ExtraGamesCard = () => {

    return (
        <Box
            display="flex"
            flexDirection='column'
            justifyContent="center"
            alignItems="center"
            mb={5}
        >
            <Typography 
                variant='h4' 
                color='#6B3FA0' 
                sx={{ fontWeight: 'bold' }}
            >
                What Else?
            </Typography>
            <Card 
                sx={{ 
                    borderRadius: 5,
                    minWidth: 150, 
                    maxWidth: 500, 
                    minHeight: 900, 
                    px: 3,
                    mx: 5, 
                    mt: 1, 
                    bgcolor: '#F0ECF6' 
                }}
            >
                <CardContent>
                    <Box 
                        display="flex" 
                        flexDirection='column'
                    >
                        <Typography 
                            variant='h6'
                            fontWeight='bold' 
                            color='#6B3FA0'
                            borderBottom={1} 
                            borderColor='#6B3FA0'
                            marginBottom={1}
                        >
                            Want something simple, quick and fun?
                        </Typography>
                        <Typography  
                            color='#201C77'
                            marginBottom={1}
                        >
                            We aim to have a selection of smaller games available
                            at all of our events. If you don't have time for, or 
                            simply don't want to play a game that may take multiple
                            hours, grab one of these instead.
                        </Typography>
                        <Typography 
                            variant='h6'
                            fontWeight='bold' 
                            color='#6B3FA0'
                            borderBottom={1} 
                            borderColor='#6B3FA0'
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
                            {smallGameNames.map((name) => (
                                <li
                                    key={smallGameInfo[name].name}
                                    sx={{ 
                                        borderBottom: 1,
                                        borderColor: '#6B3FA0',
                                        color: '#201C77',
                                    }}
                                >
                                        <a 
                                            href={smallGameInfo[name].gameSiteURL}
                                            style={{
                                                textDecoration: 'none',
                                                color: '#201C77'
                                            }}
                                        >
                                            {smallGameInfo[name].name}
                                        </a>
                                </li>
                            ))}
                        </ul>
                    </Box>
                    <Box 
                        flexDirection='column'
                        textAlign='left' 
                        py={1}
                    >
                        <Typography 
                            variant='h6'
                            fontWeight='bold' 
                            color='#6B3FA0'
                            borderBottom={1} 
                            borderColor='#6B3FA0'
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