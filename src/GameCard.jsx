import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ToggleDesc } from './ToggleDesc';
import { EmbedVideo } from './EmbedVideo';

export const GameCard = ({ gameImgURL, alt, gameSiteURL, gameName, desc, embedId }) => {
    const variantSize = gameName.length < 31 ? 35 : 27

    return (
        <Box
            display="flex"
            flexDirection='column'
            justifyContent="center"
            alignItems="center"
            mb={5}
        >
            <Typography 
                variant='h6' 
                color='#6B3FA0' 
                sx={{ 
                    fontSize: variantSize,
                    fontWeight: 'bold',
                    maxWidth: 550 
                }}
            >
                <a href={gameSiteURL} style={{ textDecoration: 'none' }}>
                    {gameName}
                </a>
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
                        justifyContent='center' 
                    >
                        <a href={gameSiteURL}>
                            <img src={gameImgURL} alt={alt} height={200} />
                        </a>
                    </Box>
                    <Box 
                        flexDirection='column' 
                        textAlign='left'
                        py={1}
                    >
                        <ToggleDesc desc={desc} />
                    </Box>
                    <Box 
                        flexDirection='column'
                        textAlign='left' 
                        py={1}
                    >
                        <Typography 
                            fontWeight='bold' 
                            color='#6B3FA0'
                            borderBottom={1} 
                            borderColor='#6B3FA0'
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