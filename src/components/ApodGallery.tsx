import React, { useState, useEffect } from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { fetchApodsInRange } from '../api/apodApi';
import ApodCard from './ApodCard';
import '../styles/index.css'; 

interface ApodGalleryProps {
  startDate?: string;
  endDate?: string;
}

const ApodGallery: React.FC<ApodGalleryProps> = ({ startDate, endDate }) => {
  const [apods, setApods] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchApodsInRange(startDate, endDate);
        setApods(Array.isArray(data) ? data : [data]);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch APOD data');
        setLoading(false);
      }
    };
    fetchData();
  }, [startDate, endDate]);
  if (loading) {
    return (
      <div className="loading">
        <CircularProgress />
      </div>
    );
  }
  if (error) {
    return (
      <Typography variant="h6" color="error" className="error">
        {error}
      </Typography>
    );
  }
  return (
    <div className="grid gallery-container">
      {apods.map((apod, index) => (
        <article key={index} className="gallery-item">
          <ApodCard
            title={apod.title}
            date={apod.date}
            explanation={apod.explanation}
            url={apod.url}
          />
        </article>
      ))}
    </div>
  );
};

export default ApodGallery;
