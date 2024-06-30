import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import '../styles/index.css'; 

interface ApodCardProps {
  title: string;
  date: string;
  explanation: string;
  url: string;
}
const ApodCard: React.FC<ApodCardProps> = ({ title, date, explanation, url }) => {
  return (
    <Card elevation={3} className="card-container">
      <CardMedia component="img" className="card-image" image={url} alt={title} />
      <CardContent className="card-content">
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="body1" className="text">
          {explanation}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default ApodCard;
