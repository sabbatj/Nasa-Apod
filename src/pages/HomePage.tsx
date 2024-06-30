import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import ApodGallery from '../components/ApodGallery';
import SearchBar from '../components/SearchBar';
import '../styles/index.css';

const HomePage: React.FC = () => {
  const [startDate, setStartDate] = useState<string | undefined>(undefined);
  const [endDate, setEndDate] = useState<string | undefined>(undefined);
  const handleSearch = (startDate: string, endDate: string) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };
  return (
    <div className="App-header">
      <Container maxWidth="lg">
        <Typography variant="h4" className="hero-text hero-text-3d" gutterBottom>
          NASA
        </Typography>
        <Typography variant="h2" className="hero-text hero-text-3d" gutterBottom>
          Discover the Wonders of Space
        </Typography>
        <Typography variant="h6" className="hero-text hero-text-3d" gutterBottom>
          Explore breathtaking images and learn about our vast universe through NASA's Astronomy Picture of the Day.
        </Typography>
        <SearchBar onSearch={handleSearch} />
        <ApodGallery startDate={startDate} endDate={endDate} />
      </Container>
    </div>
  );
};
export default HomePage;
