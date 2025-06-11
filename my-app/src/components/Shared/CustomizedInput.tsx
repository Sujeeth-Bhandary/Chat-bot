import React from 'react';
import { TextField } from '@mui/material';

type Props = {
    name: string;
    type: string;
    label: string;
};

const CustomizedInput = (props: Props) => {
  return (
    <TextField 
      name={props.name} 
      label={props.label} 
      type={props.type}
      margin="normal" 
      variant="outlined"
      fullWidth
      sx={{
        // Label styles
        '& .MuiInputLabel-root': { 
          color: 'white',            // White label color
          fontWeight: 1000,          // Label font weight 1000
        },
        // Input text styles
        '& .MuiInputBase-input': { 
          color: 'white',            // White input text
          fontWeight: 600,           // Input font weight 600
        },
        // Input background and border styles
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',    // White border color
          },
          '&:hover fieldset': {
            borderColor: 'white',    // White border color on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white',    // White border color when focused
          },
        },
        // Background color for the input
        '& .MuiInputBase-root': {
          backgroundColor: 'black',  // Black background for the input
        },
      }}
    />
  );
}

export default CustomizedInput;
