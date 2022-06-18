import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ToggleDesc } from './ToggleDesc';
import { EmbedVideo } from './EmbedVideo';

export const GameCard = ({ imgURL, alt, gameName, desc, embedId }) => {

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
            color='#6B3FA0' 
            sx={{ fontWeight: 'bold' }}
            >
                {gameName}
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
                        <img src={imgURL} alt={alt} height={200} />
                    </Box>
                    <Box 
                    flexDirection={'column'} 
                    textAlign={'left'}
                    py={1}
                    >
                        <ToggleDesc desc={desc} />
                        {/* <Typography 
                        fontWeight={'bold'} 
                        color='#6B3FA0'
                        borderBottom={1} 
                        borderColor={'#6B3FA0'}
                        >
                            Description
                        </Typography>
                        <Typography 
                        style={{ whiteSpace: 'break-spaces' }}
                        color='#201C77'
                        >
                            {desc}
                        </Typography> */}
                    </Box>
                    <Box 
                    flexDirection={'column'}
                    textAlign={'left'} 
                    py={1}
                    >
                        <Typography 
                        fontWeight={'bold'} 
                        color='#6B3FA0'
                        borderBottom={1} 
                        borderColor={'#6B3FA0'}
                        marginBottom={1}
                        >
                            How to Play?
                        </Typography>
                        <EmbedVideo embedId={embedId} />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );  
};