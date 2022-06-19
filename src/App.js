import React from 'react';
import Box from '@mui/material/Box';
import './App.css';
import { HeaderAppBar } from './HeaderAppBar';
import { Splash } from './Splash';
import { EventCard } from './EventCard';
import { GameDisplay } from './GameDisplay';
import { ExtraGamesDisplay } from './ExtraGamesDisplay';
import { Footer } from './Footer';
import { gameInfo } from './gameInfo';
import { ContactForm } from './ContactForm';

export const App = () => {
    const gameOne = gameInfo.fiveTribes;
    const gameTwo = gameInfo.cosmicEncounter;
    const gameThree = gameInfo.callToAdventureStormlight;

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
        display='flex'
        sx={{ 
          flexDirection: {
            xs: 'column',
            lg: 'row'
          },
          alignItems: {
            xs: 'center',
            lg: 'flex-start'
          } 
        }}
        justifyContent='space-around'
        >
            <GameDisplay 
            imgURL={gameOne.imgUrl}
            alt={gameOne.alt}
            link={gameOne.link}
            gameName={gameOne.name} 
            desc={gameOne.desc} 
            embedId={gameOne.embedId}
            />
            <GameDisplay 
            imgURL={gameTwo.imgUrl}
            alt={gameTwo.alt}
            link={gameTwo.link}
            gameName={gameTwo.name} 
            desc={gameTwo.desc}
            embedId={gameTwo.embedId}
            />
        </Box>
        <Box
        display='flex'
        sx={{ 
          flexDirection: {
            xs: 'column',
            lg: 'row'
          },
          alignItems: {
            xs: 'center',
            lg: 'flex-start'
          } 
        }}
        justifyContent='space-around'
        >
           <GameDisplay 
            imgURL={gameThree.imgUrl}
            alt={gameThree.alt}
            link={gameThree.link}
            gameName={gameThree.name} 
            desc={gameThree.desc}
            embedId={gameThree.embedId}
            />
          <ExtraGamesDisplay />
        </Box>

        <ContactForm />
        <Footer />  
      </>
    );
}