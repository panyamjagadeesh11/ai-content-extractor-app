import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, TextField
  } from '@mui/material';
  import { useState } from 'react';
  
  export default function SummaryTable({ data }) {
    const [search, setSearch] = useState('');
  
const transformedData = data.map(item => {
    const boldMatch = item.match(/\*\*(.+?)\*\*/);
    let title = '';
    let point = item;

    if (boldMatch) {
        title = boldMatch[1].trim();
        point = item.substring(item.indexOf(boldMatch[0]) + boldMatch[0].length).trim();
        const prefixMatch = item.match(/^(\d+\.\s*)/);
        if (prefixMatch) {
            title = `${prefixMatch[1].trim()} ${title}`.trim();
            point = item.substring(prefixMatch[0].length).trim();
            if (boldMatch) {
                point = point.substring(point.indexOf(boldMatch[0]) + boldMatch[0].length).trim();
            }
        } else if (item.includes(':')) {
            const parts = item.split(':');
            title = parts[0].trim();
            point = parts.slice(1).join(':').trim();
            if (boldMatch && title.includes(boldMatch[1])) {
                point = item.substring(item.indexOf(boldMatch[0]) + boldMatch[0].length).trim();
            }
        }
    } else if (item.includes(':')) {
        const parts = item.split(':');
        title = parts[0].trim();
        point = parts.slice(1).join(':').trim();
    } else {
        point = item;
    }

    return { title, point };
});

const filteredData = transformedData?.filter(row =>
    row.title?.toLowerCase().includes(search.toLowerCase()) ||
    row.point?.toLowerCase().includes(search.toLowerCase())
);

console.log("Transformed Data:", transformedData);
console.log("Filtered Data (for search: '" + search + "'):", filteredData);
  
    return (
      <>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          margin="normal"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Title</b></TableCell>
                <TableCell><b>Key Point</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.point}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
  