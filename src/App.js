import React from 'react';
import { Container, Typography } from '@mui/material';
import Home from './pages/Home.jsx';

function App() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom mt={4}>
        AI-powered Content Extractor
      </Typography>
      <Home />
    </Container>
  );
}

export default App;
