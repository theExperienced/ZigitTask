import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {
  const [value, setValue] = useState(globalFilter); //the value to filter by

  const handleFilter = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 300);

  const handleChange = (e) => {
    setValue(e.target.value);
    handleFilter(e.target.value);
  };

  return (
    <Box>
      <TextField
        value={value}
        onChange={handleChange}
        label='Filter By'
        size='small'
      />
    </Box>
  );
};

export default GlobalFilter;
