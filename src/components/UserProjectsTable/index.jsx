import { useMemo } from 'react';
import { useGlobalFilter, useSortBy, useTable } from 'react-table';
import { useSelector } from 'react-redux';

import { projectsTableHeaderAccessorMap } from '../../utils/headerAccessorsMaps';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Toolbar from './Toolbar';

const UserDetailsTable = () => {
  const projects = useSelector((state) => state.user.projects);

  const data = useMemo(() => [...projects], [projects]);

  const columns = useMemo(
    () =>
      projects[0]
        ? Object.keys(projects[0])
            .filter((key) => key !== 'id')
            .map((key) => {
              if (key === 'madeDadeline')
                return {
                  Header: projectsTableHeaderAccessorMap[key],
                  accessor: key,
                  Cell: ({ value }) => {
                    return (
                      <Typography>
                        {value ? 'Indeed' : 'Absolutely not'}
                      </Typography>
                    );
                  },
                  backgroundColor: 70,
                };

              return {
                Header: projectsTableHeaderAccessorMap[key],
                accessor: key,
              };
            })
        : [],
    [projects]
  );

  const tableData = useTable({ columns, data }, useGlobalFilter, useSortBy);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = tableData;

  const isEven = (idx) => idx % 2 === 0;

  return (
    <Paper sx={{ p: 3, pt: 4 }} elevation={4}>
      <Toolbar
        rows={rows}
        state={state}
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
      />
      <Table {...getTableProps()} size='small'>
        <TableHead>
          {headerGroups.map((headerGroup, i) => {
            return (
              <TableRow
                {...headerGroup.getHeaderGroupProps()}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                {headerGroup.headers.map((column) => {
                  return (
                    <TableCell
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      align='center'
                    >
                      {column.render('Header')}
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <ArrowDownwardIcon />
                        ) : (
                          <ArrowUpwardIcon />
                        )
                      ) : (
                        ''
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);

            return (
              <TableRow
                {...row.getRowProps()}
                style={{ backgroundColor: isEven(rowIndex) ? '' : '#ebebeb' }}
              >
                {row.cells.map((cell, cellIndex) => {
                  return (
                    <TableCell
                      {...cell.getCellProps()}
                      align='center'
                      style={{
                        backgroundColor:
                          cell.column.id === 'score' &&
                          (cell.value > 90
                            ? 'green'
                            : cell.value < 70
                            ? 'red'
                            : ''),
                      }}
                    >
                      {cell.render('Cell')}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default UserDetailsTable;
