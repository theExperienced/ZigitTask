import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalFilter from './GlobalFilter';

const Toolbar = ({ rows, state, preGlobalFilteredRows, setGlobalFilter }) => {
  return (
    <Grid container alignItems='center' columnGap={6} sx={{ mb: 4 }}>
      <Grid item>
        <Typography>
          Avg Score:&nbsp;
          {rows
            ? (
                rows
                  .map(({ original }) => original.score)
                  .reduce((prev, curr) => prev + curr, 0) / rows.length
              ).toFixed(2)
            : 'Loading'}
        </Typography>
      </Grid>
      <Grid item style={{ marginRight: 'auto' }}>
        <Typography>
          Percentage Made by Deadline:&nbsp;
          {rows
            ? (
                (rows
                  .map(({ original }) => original.madeDadeline)
                  .filter((madeDadeline) => madeDadeline).length /
                  rows.length) *
                100
              ).toFixed(2) + '%'
            : 'Loading'}
        </Typography>
      </Grid>
      <Grid item>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          setGlobalFilter={setGlobalFilter}
          globalFilter={state.globalFilter}
        />
      </Grid>
    </Grid>
  );
};

export default Toolbar;
