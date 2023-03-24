import { gameInfo, smallGameInfo } from '../data/gameInfo';
// import videoPlayerIcon from '../img/videoPlayerIcon.png';
// import bggLogo from '../img/bggLogo.png';

const gamesInfoTableData = Object.values(gameInfo).map((game) => (
    {
        name: game.name,
        playTime: game.playTime,
        minPlayers: game.minPlayers,
        maxPlayers: game.maxPlayers,
        complexityRating: game.complexityRating,
    }
));

const smallGamesInfoTableData = Object.values(smallGameInfo).map((game) => (
    {
        name: game.name,
        playTime: game.playTime,
        minPlayers: game.minPlayers,
        maxPlayers: game.maxPlayers,
        complexityRating: game.complexityRating,
    }
));

export const fullGamesTableData = gamesInfoTableData.concat(smallGamesInfoTableData);
