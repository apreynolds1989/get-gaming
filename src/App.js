import React from 'react';
import Box from '@mui/material/Box';
import './App.css';
import { HeaderAppBar } from './HeaderAppBar';
import { Splash } from './Splash';
import { EventCard } from './EventCard';
import { GameDisplay } from './GameDisplay';
import { Footer } from './Footer';
import { gameInfo } from './gameInfo';

export const App = () => {
    return (
      <>
        <HeaderAppBar />
        <Splash />
        <EventCard 
        date='TBD'
        time='TBD'
        location='TBD'
        openTo='TBD'
        />
        <Box
        display="flex"
        sx={{ 
          flexDirection: {
            xs: 'column',
            lg: 'row'
          } 
        }}
        justifyContent="space-around"
        alignItems="center"
        >
            <GameDisplay 
            imgURL={gameInfo.gameOne.imgUrl}
            alt={gameInfo.gameOne.alt}
            gameName={gameInfo.gameOne.name} 
            desc={gameInfo.gameOne.desc} 
            embedId={gameInfo.gameOne.embedId}
            />
            <GameDisplay 
            imgURL={gameInfo.gameTwo.imgUrl}
            alt={gameInfo.gameTwo.alt}
            gameName={gameInfo.gameTwo.name} 
            desc={gameInfo.gameTwo.desc}
            embedId={gameInfo.gameTwo.embedId}
            />
        </Box>
        <Footer />  
      </>
    );
}