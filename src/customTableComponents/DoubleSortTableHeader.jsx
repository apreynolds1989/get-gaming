import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { ColumnHeaderText } from './ColumnHeaderText';

export const DoubleSortTableHeader = ({
    isMobileSize,
    columnConfig,
    rowConfig,
    isSortable,
    initialPrimaryField,
    clickedColumn,
    setClickedColumn,
    rowOrder,
    setRowOrder,
    stickyCol,
    colsToHide,
    renderedProps,
}) => {
    const [primarySort, setPrimarySort] = useState(
        initialPrimaryField ? initialPrimaryField.field : '',
    );
    const [primarySortIsAsc, setPrimarySortIsAsc] = useState();
    const [secondarySortIsAsc, setSecondarySortIsAsc] = useState();
    const [secondarySort, setSecondarySort] = useState('');

    useEffect(() => {
        // reset these states if either sort becomes empty
        // keeps their state logic accurate
        if (primarySort === '') setPrimarySortIsAsc(undefined);
        if (secondarySort === '') setSecondarySortIsAsc(undefined);

        console.log(
            `Primary = ${primarySort} and Secondary = ${secondarySort}`,
        );
    }, [secondarySort, primarySort, primarySortIsAsc, secondarySortIsAsc]);

    const setPrimaryOrSetSecondary = (field, sortStatus) => {
        if (primarySort === '') {
            setPrimarySort(field);
        } else if (primarySort !== field && secondarySort !== field) {
            setSecondarySort(field);
        } else if (primarySort === field && sortStatus === 'asc') {
            setPrimarySort('');
            // Moves secondarySort to primarySort and sorts the table accordingly
            if (secondarySort !== '') {
                setPrimarySort(secondarySort);
                setSecondarySort('');
            }
        } else if (secondarySort === field && sortStatus === 'asc') {
            setSecondarySort('');
        }
    };

    return (
        <Box
            sx={{
                display: 'table-row',
                position: 'relative',
                backgroundColor: renderedProps.headerBgColor,
            }}
        >
            {columnConfig.map((column, index) => (
                <ColumnHeaderText
                    {...column}
                    isMobileSize={isMobileSize}
                    columnConfig={columnConfig}
                    rowConfig={rowConfig}
                    isSortable={isSortable}
                    initialPrimaryField={initialPrimaryField}
                    clickedColumn={clickedColumn}
                    setClickedColumn={setClickedColumn}
                    setPrimaryOrSetSecondary={setPrimaryOrSetSecondary}
                    primarySort={primarySort}
                    secondarySort={secondarySort}
                    primarySortIsAsc={primarySortIsAsc}
                    setPrimarySortIsAsc={setPrimarySortIsAsc}
                    secondarySortIsAsc={secondarySortIsAsc}
                    setSecondarySortIsAsc={setSecondarySortIsAsc}
                    rowOrder={rowOrder}
                    setRowOrder={setRowOrder}
                    stickyCol={stickyCol}
                    colsToHide={colsToHide}
                    colNum={index}
                    key={`column${index}`}
                    renderedProps={renderedProps}
                />
            ))}
        </Box>
    );
};
