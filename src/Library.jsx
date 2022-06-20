import * as React from 'react';
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper
} from '@mui/material';
import { gameInfo } from './gameInfo';

const gamesObj = gameInfo;
const gameNames = Object.keys(gamesObj);

// Why am I getting the following error in console:
// Warning: validateDOMNesting(...): Text nodes cannot appear as a child of <tbody>.

export const Library = () => {
    return (
        <TableContainer component={Paper}>
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
                        key={gamesObj[name].name}
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
                                href={gamesObj[name].link}
                                style={{
                                    textDecoration: 'none'
                                }}
                                >
                                    {gamesObj[name].name}
                                </a>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}