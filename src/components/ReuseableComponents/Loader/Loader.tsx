// import * as React from 'react';
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';

// export default function Loader() {
//   return (
//     <Box sx={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
//       <CircularProgress />
//     </Box>
//   );
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


export interface LoaderProps {
  width: any;
}
const Loader: React.FC<LoaderProps> = ({width}) => {
  return (
    <Box sx={{ width: width || '100%', m:2, alignSelf: 'center' }}>
      <LinearProgress />
    </Box>
  );
}

export default Loader;