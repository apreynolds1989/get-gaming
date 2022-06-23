import React from 'react';
import background from './img/Root-bg.jpeg';
import Container from '@mui/material/Container';

export const Splash = () => {
    return (
        <Container 
        maxWidth='xl' 
        sx={{
            display: {
                sm: 'none',
                md: 'block'
            }, 
            mt: 7, 
            backgroundImage: `url(${background})`, 
            backgroundRepeat:'no-repeat', 
            backgroundSize: 'contain', 
            height: 600, 
            width: 1000 
          }}
        >
        
        </Container>
    )
}