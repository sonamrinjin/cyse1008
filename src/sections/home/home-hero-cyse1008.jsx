import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { CustomComponent } from './components/CustomComponent';



export function HomeHeroCYSE1008() {
  const [count, setCount] = useState(0);  // useState to track the click count

  return (
    <Box sx={{ textAlign: 'center', p: 3, bgcolor: 'primary.light', borderRadius: 2 }}>
      <h2>MY STORE TITLE</h2>
      <CustomComponent />  {/* Display the CustomComponent */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount(count + 1)}  // Increment count when button is clicked
      >
        Click Me {count}
      </Button>
    </Box>
  );
}
