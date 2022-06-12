import React from 'react';
import background from './img/Root-bg.jpeg';
import Container from '@mui/material/Container';

const Splash = () => {
    return (
        <Container maxWidth='xl' sx={{ backgroundImage: `url(${background})`, backgroundRepeat:'no-repeat', backgroundSize: 'contain', height: 1000 }}>
             
        </Container>
    )
}

export default Splash;