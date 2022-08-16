import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import './App.css';
import { HeaderAppBar } from './HeaderAppBar';
import { Splash } from './Splash';
import { EventCard } from './EventCard';
import { GameDisplay } from './GameDisplay';
import { GameCard } from './GameCard';
import { Footer } from './Footer';
import { gameInfo } from './gameInfo';
import { ExtraGamesCard } from './ExtraGamesCard';
import { FeaturedGamesBanner } from './FeaturedGamesBanner';

export const App = () => {
    // Testing deployment
    const isMobileSize = useMediaQuery('(max-width:600px)');

    const gameOne = gameInfo.fiveTribes;
    const gameTwo = gameInfo.callToAdventureStormlight;
    const gameThree = gameInfo.mysterium;

    return (
      <>
        <HeaderAppBar isMobileSize={isMobileSize} />
        <Splash />
        <EventCard 
        isMobileSize={isMobileSize}
        date='Friday - August 26, 2022'
        time='7:00PM - 9:30PM'
        address='https://g.page/get-coding-st-johns?share'
        location='Get Coding Office'
        openTo='Get Coding'
        />
        <FeaturedGamesBanner isMobileSize={isMobileSize} />
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
        <Footer />  
      </>
    );
}