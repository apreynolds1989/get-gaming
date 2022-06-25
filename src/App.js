import React from 'react';
import Box from '@mui/material/Box';
import './App.css';
import { HeaderAppBar } from './HeaderAppBar';
import { Splash } from './Splash';
import { EventCard } from './EventCard';
import { GameDisplay } from './GameDisplay';
import { GameCard } from './GameCard';
import { Footer } from './Footer';
import { gameInfo } from './gameInfo';
import { ContactForm } from './ContactForm';
import { Library } from './Library';
import { Gallery } from './Gallery';
import { ExtraGamesCard } from './ExtraGamesCard';

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
                cardToDisplay={
                    <GameCard
                        gameImgURL={gameOne.gameImgURL}
                        alt={gameOne.alt}
                        gameSiteURL={gameOne.gameSiteURL}
                        gameName={gameOne.name} 
                        desc={gameOne.desc} 
                        embedId={gameOne.embedId} 
                        />
                } 
            />
            <GameDisplay
                cardToDisplay={
                    <GameCard
                        gameImgURL={gameTwo.gameImgURL}
                        alt={gameTwo.alt}
                        gameSiteURL={gameTwo.gameSiteURL}
                        gameName={gameTwo.name} 
                        desc={gameTwo.desc} 
                        embedId={gameTwo.embedId} 
                        />
                } 
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
                cardToDisplay={
                    <GameCard
                        gameImgURL={gameThree.gameImgURL}
                        alt={gameThree.alt}
                        gameSiteURL={gameThree.gameSiteURL}
                        gameName={gameThree.name} 
                        desc={gameThree.desc} 
                        embedId={gameThree.embedId} 
                        />
                } 
            />
              <GameDisplay
                  cardToDisplay={
                      <ExtraGamesCard /> 
                  } 
              />
        </Box>

        <ContactForm />

        <Library />

        <Gallery />

        <Footer />  
      </>
    );
}