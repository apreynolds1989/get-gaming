import React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ReactComponent as WhiteGetGaming } from './img/WhiteGetGaming.svg';

const pages = [
    {
        title: 'Home',
        route: '',
    },
    {
        title: 'Library',
        route: 'Library',
    },
    {
        title: 'Gallery',
        route: 'Gallery',
    },
    {
        title: 'Contact',
        route: 'ContactForm'
    },
];

export const Footer = () => {
    return (
        <Box 
        mx={0} 
        sx={{ 
            backgroundColor: 'black', 
            color: 'white',
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
                sx={{ 
                    flexDirection: {
                      xs: 'column-reverse',
                      md: 'row'
                    }
                  }}
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
                        <Link to='/'><WhiteGetGaming /></Link>
                        <Box 
                        borderTop={1} 
                        borderColor='white' 
                        >
                            <small>
                                Events in partnership with&nbsp; 
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
                    borderColor='white'
                    sx={{
                        borderBottom: {
                            xs: 1,
                            md: 0
                        },
                        borderTop: {
                            xs: 1,
                            md: 0
                        },
                        marginBottom: {
                            xs: 5,
                            md: 0
                        }
                    }}
                    >
                        {pages.map((page, i, arr) => {
                            let borderSize;
                            if (arr.length - 1 === i) borderSize = 0;
                            else borderSize = 1;

                            return (
                                <Button
                                key={page.title}
                                sx={{ 
                                    my: 2,
                                    display: 'block',
                                    fontSize: 14, 
                                    borderRight: borderSize, 
                                    borderColor: 'white', 
                                    borderRadius: 0 
                                  }}
                                >
                                    <Link 
                                        to={`/${page.route}`}
                                        style={{ color: 'white' }}
                                    >
                                        {page.title}
                                    </Link>
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