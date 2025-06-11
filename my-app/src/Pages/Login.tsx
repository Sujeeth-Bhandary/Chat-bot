import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CustomizedInput from '../components/Shared/CustomizedInput';
import { toast } from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const auth=useAuth();
  const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      const formData=new FormData(e.currentTarget);
      const email=formData.get("email")as string;
      const password=formData.get("password")as string;
      try {
        toast.loading("Sigining in",{id:"login"});
        await auth?.login(email,password);
        toast.success("Sigined in Successfully",{id:"login"});
      } catch (error) {
        console.log(error);
        toast.error("Sigining in Failed",{id:"login"});
      }
      

  }
  return ( 
    <Box 
      width="100%" 
      height="100%" 
      display="flex" 
      flex={1}
    >
      {/* Left Section with Image */}
      <Box 
        padding={8} 
        mt={8} 
        display={{ md: "flex", sm: "none", xs: "none" }}
      >
        <img src="airobot.png" alt="robot" style={{ width: "350px" }} />
      </Box>

      {/* Right Section with Form */}
      <Box 
        display="flex" 
        flex={{ sm: 1, xs: 0.5 }} 
        justifyContent="center" 
        alignItems="center" 
        padding={2} 
        mt="16px" 
        ml="auto"
      >
        <form 
        onSubmit={handleSubmit}
        style={{
          margin: "auto",
          padding: "20px",
          boxShadow: "10px 10px #000",
          borderRadius: "10px",
          border: "none",
          display: "flex",
          flexDirection: "column", // Ensure all elements are stacked vertically
          width: "100%", // Full width
          maxWidth: "400px", // Restrict max width
        }}>
          {/* Title */}
          <Typography 
            variant="h4" 
            textAlign="center" 
            padding={2} 
            fontWeight={600}
            color="white"
          >
            LOGIN
          </Typography>

          {/* Email and Password Fields */}
          <CustomizedInput type="email" name="email" label="Email" />
          <CustomizedInput type="password" name="password" label="Password" />

          {/* Login Button */}
          <Button 
          type="submit"
            sx={{
              px: "16px", 
              py: "10px", 
              bgcolor: "#00fffc",
              width: "100%", // Full width button
              alignItems: "center",
              ":hover": {
                bgcolor: "white",
                color: "#00fffc", // Text color changes on hover
              },
              color: "white", // Default text color
              borderRadius: "5px", // Rounded corners
              fontWeight: 600, // Make button text bold
              textTransform: "none", // Disable uppercase text
            }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
