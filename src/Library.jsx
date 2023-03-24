import * as React from 'react';
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, useMediaQuery, Box
} from '@mui/material';
import { gameInfo } from './data/gameInfo';
import videoPlayerIcon from './img/videoPlayerIcon.png';
import bggLogo from './img/bggLogo.png';
import { HeaderAppBar } from './HeaderAppBar';
import { Footer } from './Footer';

const gameNames = Object.keys(gameInfo).sort();

export const Library = () => {
    const isMobileSize = useMediaQuery('(max-width:600px)');

    return (
        <>
            <HeaderAppBar isMobileSize={isMobileSize} />
            <TableContainer component={Paper} sx={{ marginTop: isMobileSize ? 10 : 15, }}>
                <Table 
                    sx={{ 
                        maxWidth: '750px', 
                        margin: 'auto', 
                        marginBottom: 5
                    }} 
                    aria-label="simple table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell 
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: '25px',
                                    bgcolor: '#F0ECF6',
                                    color: '#6B3FA0',
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                }}
                            >
                                Available Games
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {gameNames.map((name) => (
                            <TableRow
                                key={gameInfo[name].name}
                                sx={{
                                    borderBottom: 1,
                                    borderColor: '#6B3FA0',
                                }}
                            >
                                <TableCell 
                                    component="th" 
                                    scope="row"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        color: '#201C77',
                                        borderBottom: 2,
                                        borderColor: '#6B3FA0',
                                    }}
                                >
                                    <Box>
                                        <a 
                                            href={`${gameInfo[name].gameSiteURL}`}
                                            style={{
                                                color: '#201C77',
                                                textDecoration: 'none',
                                            }}
                                        >
                                            {gameInfo[name].name}
                                        </a>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                        }}
                                    >
                                        <a 
                                            href={`${gameInfo[name].gameSiteURL}`}
                                            style={{
                                                color: '#201C77',
                                                textDecoration: 'none',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    border: '1px solid #6B3FA0',
                                                    borderRadius: 2,
                                                    paddingX: 0.5,
                                                    marginX: 1,
                                                    maxHeight: '23px'
                                                }}
                                            >
                                                <img src={bggLogo} width='20px' alt='Play Button' />
                                            </Box>
                                        </a>
                                        <a 
                                            href={`https://www.youtube.com/watch?v=${gameInfo[name].embedId}`}
                                            style={{
                                                color: '#201C77',
                                                textDecoration: 'none',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    maxHeight: '23px'
                                                }}
                                            >
                                                <img src={videoPlayerIcon} width='20px' alt='Play Button' />
                                            </Box>
                                        </a>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Footer isMobileSize={isMobileSize} />
        </>
    );
}