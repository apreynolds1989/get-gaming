import * as React from 'react';
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper
} from '@mui/material';
import { gameInfo } from './gameInfo';
import { HeaderAppBar } from './HeaderAppBar';
import { Footer } from './Footer';

const gameNames = Object.keys(gameInfo).sort();

export const Library = () => {
    return (
        <>
            <HeaderAppBar />
            <TableContainer component={Paper} sx={{ mt: 12 }}>
                <Table 
                sx={{ 
                    maxWidth: 750, 
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
                                fontSize: 25,
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
                                    color: '#201C77',
                                    borderBottom: 2,
                                    borderColor: '#6B3FA0',
                                }}
                                >
                                    <a 
                                    href={`${gameInfo[name].gameSiteURL}`}
                                    style={{
                                        color: '#201C77',
                                        textDecoration: 'none',
                                    }}
                                    >
                                        {gameInfo[name].name}
                                    </a>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Footer />
        </>
    );
}