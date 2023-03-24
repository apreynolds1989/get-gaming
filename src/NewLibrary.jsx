import  React from 'react';
import { useMediaQuery, Box } from '@mui/material';
import { HeaderAppBar } from './HeaderAppBar';
import { Footer } from './Footer';
import { DoubleSortTable } from './customTableComponents/DoubleSortTable';
import { gamesInfoTableHeaders } from './data/gamesInfoTableHeaders';
import { fullGamesTableData } from './utilities/formatGamesInfo';

export const Library = () => {
    const isMobileSize = useMediaQuery('(max-width:600px)');

    return (
        <>
            <HeaderAppBar isMobileSize={isMobileSize} />
            <Box 
                sx={{ 
                    marginTop: isMobileSize ? 10 : 15,
                    marginBottom: 3,
                    maxWidth: '95vw', 
                    marginX: 'auto',
                    paddingX: 1,
                }}
            >
                <DoubleSortTable
                    columnConfig={gamesInfoTableHeaders}
                    rowConfig={fullGamesTableData}
                    isSearchable={true}
                    isSortable={true}
                    isFilterable={true}
                    initialPrimaryField={{
                        field: 'name',
                        sortStatus: 'desc',
                    }}
                    stickyCol={'name'}
                    tableBorder={`2px solid #6B3FA0`}
                    outerRadius={3}
                    headerBgColor='#F0ECF6'
                    headerTextColor='#6B3FA0'
                    headerArrowColor='#6B3FA0'
                    dataBgColorOne='#F0ECF6'
                    dataBgColorTwo='white'
                    dataTextColor='#6B3FA0'
                    interactableTextColor='#6B3FA0'
                    rowEndBorder={'1px solid #c6c6c6'}
                    leftAlignedFields={['name']}
                />
            </Box>
            <Footer isMobileSize={isMobileSize} />
        </>
    );
}