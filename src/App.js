import React from 'react';
import { Box, Paper, useMediaQuery } from '@mui/material';
import './App.css';
import { HeaderAppBar } from './HeaderAppBar';
import { Splash } from './Splash';
import { EventCard } from './EventCard';
import { GameDisplay } from './GameDisplay';
import { GameCard } from './GameCard';
import { Footer } from './Footer';
import { gameInfo, smallGameInfo } from './data/gameInfo';
import { ExtraGamesCard } from './ExtraGamesCard';
import { FeaturedGamesBanner } from './FeaturedGamesBanner';
// import { fullGamesTableData } from './utilities/formatGamesInfo';

export const App = () => {
    const isMobileSize = useMediaQuery('(max-width:600px)');
    const isLargeScreen = useMediaQuery('(min-width:1250px)');

    const gameOne = gameInfo.cosmicEncounter;
    const gameTwo = gameInfo.mindmgmt;
    const gameThree = smallGameInfo.theResistance;
    const gameFour = smallGameInfo.telestrations;
    const gameFive = smallGameInfo.justone;
    // console.log(fullGamesTableData);

    return (
      <Paper sx={{maxWidth: '100vw', overflow: 'hidden'}}>
        <HeaderAppBar isMobileSize={isMobileSize} />
        <Splash />
        <EventCard 
            isMobileSize={isMobileSize}
            date='March 27, 2023'
            time='7:00 PM'
            address='https://goo.gl/maps/oMciM8kkQEvCtMCo7'
            location='Wooden Walls Distilling'
            openToWebsite='https://www.meetup.com/NDevMeetup/'
            openTo='NDev'
            linkedIn={'https://www.linkedin.com/in/andrew-reynolds-071020226/'}
            host={'Andrew Reynolds'}
            // coHostLinkedIn={'https://www.linkedin.com/in/devin-marsh/'}
            // coHost={'Devin Marsh'}
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
                    <GameCard
                        isMobileSize={isMobileSize}
                        gameImgURL={gameFour.gameImgURL}
                        alt={gameFour.alt}
                        gameSiteURL={gameFour.gameSiteURL}
                        gameName={gameFour.name} 
                        desc={gameFour.desc} 
                        embedId={gameFour.embedId} 
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
                        gameImgURL={gameFive.gameImgURL}
                        alt={gameFive.alt}
                        gameSiteURL={gameFive.gameSiteURL}
                        gameName={gameFive.name} 
                        desc={gameFive.desc} 
                        embedId={gameFive.embedId} 
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