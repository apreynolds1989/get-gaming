import React from 'react';
import { Box, Paper, useMediaQuery } from '@mui/material';
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
    const isMobileSize = useMediaQuery('(max-width:600px)');
    const isLargeScreen = useMediaQuery('(min-width:1250px)');

    const gameOne = gameInfo.fiveTribes;
    const gameTwo = gameInfo.callToAdventureStormlight;
    const gameThree = gameInfo.cosmicEncounter;

    return (
      <Paper sx={{maxWidth: '100vw', overflow: 'hidden'}}>
        <HeaderAppBar isMobileSize={isMobileSize} />
        <Splash />
        <EventCard 
            isMobileSize={isMobileSize}
            date='TBD'
            time='TBD'
            address=''
            location='TBD'
            openTo='TBD'
            linkedIn={'https://www.linkedin.com/in/andrew-reynolds-071020226/'}
            host={'Andrew Reynolds'}
        />
        <FeaturedGamesBanner isMobileSize={isMobileSize} />
        <Box
            display='flex'
            sx={{ 
            flexDirection: isLargeScreen ? 'row' : 'column',
            alignItems: isLargeScreen ? 'flex-start' : 'center',
            }}
            justifyContent='space-around'
        >
            <GameDisplay
                cardToDisplay={
                    <GameCard
                        isMobileSize={isMobileSize}
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
                        isMobileSize={isMobileSize}
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
              flexDirection: isLargeScreen ? 'row' : 'column',
              alignItems: isLargeScreen ? 'flex-start' : 'center',
            }}
            justifyContent='space-around'
        >
            <GameDisplay
                cardToDisplay={
                    <GameCard
                        isMobileSize={isMobileSize}
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
                      <ExtraGamesCard isMobileSize={isMobileSize} /> 
                  } 
              />
        </Box>
        <Footer isMobileSize={isMobileSize} />  
      </Paper>
    );
}