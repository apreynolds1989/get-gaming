import React from 'react';
import { Box, Paper, useMediaQuery } from '@mui/material';
import './App.css';
import { HeaderAppBar } from './HeaderAppBar';
import { Splash } from './Splash';
import { EventCard } from './EventCard';
import { GameDisplay } from './GameDisplay';
import { GameCard } from './GameCard';
import { Footer } from './Footer';
import { gameInfo, smallGameInfo } from './gameInfo';
import { ExtraGamesCard } from './ExtraGamesCard';
import { FeaturedGamesBanner } from './FeaturedGamesBanner';

export const App = () => {
    const isMobileSize = useMediaQuery('(max-width:600px)');
    const isLargeScreen = useMediaQuery('(min-width:1250px)');

    const gameOne = gameInfo.cosmicEncounter;
    const gameTwo = smallGameInfo.theResistance;
    const gameThree = gameInfo.mysterium;

    return (
      <Paper sx={{maxWidth: '100vw', overflow: 'hidden'}}>
        <HeaderAppBar isMobileSize={isMobileSize} />
        <Splash />
        <EventCard 
            isMobileSize={isMobileSize}
            date='Sept. 14, 2022'
            time='6:30PM - 9:30PM'
            address='https://www.google.com/maps/place/Get+Coding/@47.562575,-52.7083885,17z/data=!3m1!4b1!4m5!3m4!1s0x4b0ca3ac0a3064ab:0x9f7aae1304759de1!8m2!3d47.562575!4d-52.7083885'
            location='Get Coding'
            openToWebsite='https://netbenefitsoftware.com/'
            openTo='NetBenefit Software'
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