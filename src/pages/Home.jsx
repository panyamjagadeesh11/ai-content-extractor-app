import React, { useState } from 'react';
import UrlInputForm from '../components/UrlInputForm';
import SummaryTable from '../components/SummaryTable';
import { CircularProgress, Box } from '@mui/material';

// Mock function to simulate backend response
const summarizeUrl = async (url) => {
    const res = await fetch('http://localhost:8080/api/summarize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });
  
    if (!res.ok) {
      throw new Error(`Server error: ${res.status}`);
    }
  
    const result = await res.json();
    return result.keyPoints; // Make sure your backend returns { summary: [...] }
  };

export default function Home() {
  const [summaryData, setSummaryData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleUrlSubmit = async (url) => {
    setLoading(true);
    try {
      const data = await summarizeUrl(url); // 🔄 replaced mock
      setSummaryData(data);
    } catch (err) {
      console.error('Error fetching summary:', err);
    }
    setLoading(false);
  };
  
  return (
    <Box mt={4}>
      <UrlInputForm onSubmit={handleUrlSubmit} />
      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        summaryData.length > 0 && <SummaryTable data={summaryData} />
      )}
    </Box>
  );
}
