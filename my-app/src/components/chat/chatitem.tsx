import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { useAuth } from '../../context/AuthContext';

const ChatItem = ({ content, role }: { content: string; role: 'user' | 'assistant' }) => {
  const auth = useAuth();

  if (role === 'assistant') {
    return (
      <Box
        sx={{
          display: 'flex',
          p: 2,
          my: 2,
          bgcolor: '#004d5612',
          gap: 2,
        }}
      >
        <Avatar sx={{ ml: 0 }}>
          <img src="openai.png" alt="openai" width="30px" />
        </Avatar>
        <Box>
          <Typography fontSize={'20px'}>{content}</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        p: 2,
        bgcolor: '#004d56',
        gap: 2,
        flexDirection: 'row-reverse',
      }}
    >
      <Avatar sx={{ ml: 0, bgcolor: 'black', color: 'white' }}>
        {auth?.user?.name[0]}
      </Avatar>
      <Box>
        <Typography fontSize={'20px'} sx={{ color: 'white' }}>
          {content}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatItem;
