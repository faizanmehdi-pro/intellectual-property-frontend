import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function PageLoader() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", position: "fixed", top: 0, right: 0, left: 0, bottom: 0, background: "rgba(35, 40, 85, 0.3)", zIndex: 1 }}>
    <Box sx={{ width: '300px', m:2, alignSelf: 'center' }}>
      <LinearProgress />
      {/* <p style={{textAlign: "center", color: "#fff", fontSize: "18px", fontWeight: 700}}>Downloading Documents</p> */}
    </Box>
    </Box>
  );
}

