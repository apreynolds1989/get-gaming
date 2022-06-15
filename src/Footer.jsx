import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ReactComponent as WhiteGetGaming } from './img/WhiteGetGaming.svg';

const pages = ['Home', 'Library', 'Gallery', 'Contact'];

export const Footer = () => {
    return (
        <Box 
        mx={0} 
        sx={{ 
            backgroundColor: 'black', 
            color: 'white' 
          }}
        >
            <Box
            display="flex"
            flexDirection='column'
            padding={10}
            paddingBottom={0}
            >
                <Box
                display="flex"
                flexDirection='row'
                justifyContent="space-around"
                alignItems="center"
                mb={5}
                >
                    <Box
                    display="flex"
                    flexDirection='column'
                    justifyContent="center"
                    alignItems="center"
                    >
                        <WhiteGetGaming />
                        <Box 
                        borderTop={1} 
                        borderColor='white' 
                        >
                            <small>
                                Events in partnership with 
                                <a style={{ color: 'white' }}
                                   href="http://https://www.getcoding.ca/">
                                       Get Coding
                                </a>
                            </small>
                        </Box>
                    </Box>
                    <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    >
                        {pages.map((page, i, arr) => {
                            let borderSize;
                            if (arr.length - 1 === i) borderSize = 0;
                            else borderSize = 1;

                            return (
                                <Button
                                key={page}
                                sx={{ 
                                    my: 2, 
                                    color: 'white', 
                                    display: 'block',
                                    fontSize: 14, 
                                    borderRight: borderSize, 
                                    borderColor: 'white', 
                                    borderRadius: 0 
                                  }}
                                >
                                    {page}
                                </Button>
                            );
                        })}
                    </Box>
                </Box>
                <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb={5}
                >
                    <small>Copyright &copy; 2022 - Get Gaming</small>
                </Box>     
            </Box>
        </Box>
    );
};