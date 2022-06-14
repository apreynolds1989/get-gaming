import React from 'react';
// import * as React from 'react';  <--- What's the difference??
import Box from '@mui/material/Box';
import './App.css';
import Header from './Header';
import Splash from './Splash';
import EventCard from './EventCard';
import DownArrow from './DownArrow';
import GameCard from './GameCard';
import Footer from './Footer';

const gameOneDesc = `Crossing into the Land of 1001 Nights, your caravan arrives at the fabled Sultanate of Naqala. The old sultan just died and control of Naqala is up for grabs! The oracles foretold of strangers who would maneuver the Five Tribes to gain influence over the legendary city-state. Will you fulfill the prophecy? Invoke the old Djinns and move the Tribes into position at the right time, and the Sultanate may become yours!

Designed by Bruno Cathala, Five Tribes builds on a long tradition of German-style games that feature wooden meeples. Here, in a unique twist on the now-standard "worker placement" genre, the game begins with the meeples already in place – and players must cleverly maneuver them over the villages, markets, oases, and sacred places tiles that make up Naqala. How, when, and where you dis-place these Five Tribes of Assassins, Elders, Builders, Merchants, and Viziers determine your victory or failure.

As befitting a Days of Wonder game, the rules are straightforward and easy to learn. But devising a winning strategy will take a more calculated approach than our standard fare. You need to carefully consider what moves can score you well and put your opponents at a disadvantage. You need to weigh many different pathways to victory, including the summoning of powerful Djinns that may help your cause as you attempt to control this legendary Sultanate.`

const gameTwoDesc = `Build a galactic empire...

In the depths of space, the alien races of the Cosmos vie with each other for control of the universe. Alliances form and shift from moment to moment, while cataclysmic battles send starships screaming into the warp.

This classic game of alien politics returns from the warp once more!

In Cosmic Encounter, each player becomes the leader of one of dozens of alien races, each with its own unique power. On a player's turn, he or she becomes the offense. The offense encounters another player on a planet by moving a group of his or her ships through the hyperspace gate to that planet. Both sides can invite allies and play cards to try and tip the encounter in their favor.

The object of the game is to establish colonies in other players' planetary systems. The winner(s) are the first player(s) to have five colonies on any planets outside his or her home system. These colonies may all be in one system or scattered over multiple systems. The players must use force, cunning, and diplomacy to ensure their victory. And, because alliances are a key part of the game, multiple players can win together!`

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
            <GameCard gameName='Five Tribes' desc={gameOneDesc} />
          </Box>
          <Box
            display="flex"
            flexDirection={'column'}
            justifyContent="center"
            alignItems="center"
          >
            <DownArrow />
            <GameCard gameName='Cosmic Encounter' desc={gameTwoDesc} />
          </Box>
        </Box>
        <Footer />  
      </>
    );
}

export default App;