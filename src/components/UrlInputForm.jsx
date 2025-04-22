import React, {useState} from 'react';
import { TextField, Button, Box } from '@mui/material';

export default function UrlInputForm({ onSubmit }) {
  const [url, setUrl] = useState('');

  const handleSubmit = () => {
    if (url.trim()) onSubmit(url);
  };

  return (
    <Box display="flex" gap={2} mt={2}>
      <TextField
        fullWidth
        label="Enter Public URL"
        variant="outlined"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>Summarize</Button>
    </Box>
  );
}
