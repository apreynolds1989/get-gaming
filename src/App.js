import React from 'react';
// import * as React from 'react';  <--- What's the difference??
import Box from '@mui/material/Box';
import './App.css';
import Header from './Header';
import Splash from './Splash';
import EventCard from './EventCard';
import DownArrow from './DownArrow';
import GameCard from './GameCard';

function App() {
    return (
      <>
        <Header />
        <Splash />
        <EventCard />
        <Box
          display="flex"
          flexDirection={'row'}
          justifyContent="space-around"
          alignItems="center"
        >
          <Box
            display="flex"
            flexDirection={'column'}
            justifyContent="center"
            alignItems="center"
          >
            <DownArrow />
            <GameCard />
          </Box>
          <Box
            display="flex"
            flexDirection={'column'}
            justifyContent="center"
            alignItems="center"
          >
            <DownArrow />
            <GameCard />
          </Box>
        </Box>  
      </>
    );
}

export default App;