import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '100px' }}>
      <Typography variant="h4" color="error" gutterBottom>
        Oops! Something went wrong.
      </Typography>
      <Typography variant="body1" gutterBottom>
        We apologize for the inconvenience. Please try again later.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/" style={{ marginTop: '20px' }}>
        Go Home
      </Button>
    </Container>
  );
};
export default ErrorPage;