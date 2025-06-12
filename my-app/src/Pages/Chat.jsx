import React from 'react'
import {Avatar, Box, Button, Typography} from "@mui/material"
import { red } from '@mui/material/colors';
import { useAuth } from '../context/AuthContext';

const Chat=()=>{
  const auth=useAuth();
  return (
    <Box sx={{
      display:"flex",
      flex:1,
      width:"100%",
      height:"100%",
      gap:3,
      mt:3,

    }}>
      <Box sx={{display:{md:"flex" ,xs:"none",sm:"none"},flex:0.2,flexDirection:"column"}}>
        <Box
        sx={{display:"flex",
          width:"100%",
          height:"100%",
          bgcolor:"rgb(17,29,39)",
          borderRadius:5,
          flexDirection:'column',
          mx:3,
        }}
        >
          <Avatar sx={{mx:"auto",my:2,bgcolor:"white",color:"black",fontWeight:700,}}>
            {auth?.user?.name[0]}
          </Avatar>
          <Typography sx={{mx:"auto",
            fontFamily:"work sans"
          }}>You are talking to a Chat-Bot</Typography>
          <Typography sx={{mx:"auto",
            fontFamily:"work sans",
            padding:3,
            my:4,
          }}>You  can ask some question related
          to Business,Education,Advice,etc.But Avoid sharing personal
          information</Typography>
          <Button
          sx={{
            mx:"auto",
            my:"auto",
            color:"white",
            bgcolor:red[300],
            ":hover":{bgcolor:red.A400},
            fontWeight:700,
            borderRadius:3,
            mb:8,

          }}>Clear Conversation</Button>
        </Box>
      </Box>
      <Box sx={{display:"flex",
        flex:{md:0.8,xs:1,sm:1}
      }}>
        <Typography sx={{textAlign:'center',fontSize:"40px",color:"white",mb:2,mx:"auto"
        }}>Model
           Gpt 3.5 Terbo
        </Typography>
        <Box sx={{
          width:"auto",
          height:"60vh",
          borderRadius:3,
          mx:"auto",
          display:"flex",
          flexDirection:"column",
          overflow:'scroll',
          scrollBehavior:"smooth",
          overflowX:"hidden",
          overflowY:"auto",
          
        }}></Box>
      </Box>
    </Box>
  )
}

export default Chat
