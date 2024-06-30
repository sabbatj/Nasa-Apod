import React, { useState } from 'react';
import { Grid, Button, TextField } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import SearchIcon from '@mui/icons-material/Search';
import { format } from 'date-fns';
import '../styles/index.css'; 

interface SearchBarProps {
  onSearch: (startDate: string, endDate: string) => void;
}

 const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleSearch = () => {
    if (selectedDate) {
      const formattedDate = format(selectedDate, 'yyyy-MM-dd');
      onSearch(formattedDate, formattedDate);
    }
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container spacing={2} justifyContent="center" alignItems="center" className="search-bar-container">
        <Grid item>
          <DatePicker
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                className="search-bar-textfield" 
                InputLabelProps={{ shrink: true }}
              />
            )}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            className="search-bar-button hero-button" 
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
};
export default SearchBar;