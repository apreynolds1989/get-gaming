import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ReactComponent as WhiteGetGaming } from './img/WhiteGetGaming.svg';

const pages = ['Home', 'Library', 'Gallery', 'Contact'];

const Footer = () => {
    return (
        <div className='footer'>
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
                    <WhiteGetGaming />
                    <Box
                        display="flex"
                        flexDirection='row'
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
                                sx={{ my: 2, color: '#6B3FA0', display: 'block', fontSize: 14, borderRight: borderSize, borderColor: 'white', borderRadius: 0 }}
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
                    <small>Copyright &copy; Weekly Games Tracker</small>
                </Box>     
            </Box>
        </div>
    );
};

export default Footer;