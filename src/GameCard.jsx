import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BoardGame from './img/BoardGame.png';
import EmbedVideo from './EmbedVideo';

const GameCard = () => {
    return (
        <Box
        display="flex"
        flexDirection={'column'}
        justifyContent="center"
        alignItems="center"
        mb={5}
        >
            <Typography variant='h4' color='#6B3FA0' sx={{ fontWeight: 'bold' }}>
                Name Of Game
            </Typography>
            <Card sx={{ minWidth: 275, maxWidth:500, px: 10, mt: 1, border: 1, borderColor: 'black', bgcolor: '#F0ECF6' }}>
                <CardContent>
                    <Box display="flex" justifyContent='center' >
                        <img src={BoardGame} alt="Board Game Placeholder" height={200} />
                    </Box>
                    <Box flexDirection={'column'} textAlign={'left'} py={1}>
                        <Typography fontWeight={'bold'} borderBottom={1} borderColor={'gray'}>
                            Description
                        </Typography>
                        <Typography>
                            Crossing into the Land of 1001 Nights, your caravan arrives at the fabled Sultanate of Naqala. The old sultan just died and control of Naqala is up for grabs! The oracles foretold of strangers who would maneuver the Five Tribes to gain influence over the legendary city-state. Will you fulfill the prophecy? Invoke the old Djinns and move the Tribes into position at the right time, and the Sultanate may become yours!
                            <br />
                            <br />
                            Designed by Bruno Cathala, Five Tribes builds on a long tradition of German-style games that feature wooden meeples. Here, in a unique twist on the now-standard "worker placement" genre, the game begins with the meeples already in place – and players must cleverly maneuver them over the villages, markets, oases, and sacred places tiles that make up Naqala. How, when, and where you dis-place these Five Tribes of Assassins, Elders, Builders, Merchants, and Viziers determine your victory or failure.
                            <br />
                            <br />
                            As befitting a Days of Wonder game, the rules are straightforward and easy to learn. But devising a winning strategy will take a more calculated approach than our standard fare. You need to carefully consider what moves can score you well and put your opponents at a disadvantage. You need to weigh many different pathways to victory, including the summoning of powerful Djinns that may help your cause as you attempt to control this legendary Sultanate.
                        </Typography>
                    </Box>
                    <Box flexDirection={'column'} textAlign={'left'} py={1}>
                        <Typography fontWeight={'bold'} borderBottom={1} borderColor={'gray'}>
                            How to Play?
                        </Typography>
                        <EmbedVideo embedId="hfvDro2ecFw" />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );  
};

export default GameCard;