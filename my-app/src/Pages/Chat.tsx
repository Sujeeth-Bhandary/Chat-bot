import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { useAuth } from "../context/AuthContext";
import ChatItem from "../components/chat/chatitem";
import { IoMdSend } from "react-icons/io";
import { useRef, useState } from "react";
import { sendChatRequest } from "../helpers/api-communicator";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const Chat = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const auth = useAuth();

  const handleSubmit = async () => {
    const content = inputRef.current?.value?.trim();
    if (!content) return;

    // Clear input
    if (inputRef.current) inputRef.current.value = "";

    // Show user message
    const newMessage: Message = { role: "user", content };
    setChatMessages((prev) => [...prev, newMessage]);

    try {
      const response = await sendChatRequest(content);

      const assistantReply = response.content[1] || "No response from assistant";
      const assistantMessage: Message = {
        role: "assistant",
        content: assistantReply,
      };

      setChatMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      
      const errorMessage: Message = {
        role: "assistant",
        content: "❌ Sorry, something went wrong.",
      };
      setChatMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        gap: 3,
        mt: 3,
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.2,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            bgcolor: "rgb(17,29,39)",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 700,
            }}
          >
            {auth?.user?.name?.[0] || "U"}
          </Avatar>
          <Typography sx={{ mx: "auto", fontFamily: "work sans" }}>
            You are talking to a Chat-Bot
          </Typography>
          <Typography
            sx={{
              mx: "auto",
              fontFamily: "work sans",
              padding: 3,
              my: 4,
            }}
          >
            You can ask some question related to Business, Education, Advice,
            etc. But Avoid sharing personal information
          </Typography>
          <Button
            sx={{
              mx: "auto",
              my: "auto",
              color: "white",
              bgcolor: red[300],
              ":hover": { bgcolor: red.A400 },
              fontWeight: 700,
              borderRadius: 3,
              mb: 8,
            }}
            onClick={() => setChatMessages([])}
          >
            Clear Conversation
          </Button>
        </Box>
      </Box>

      {/* Chat Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: { md: 0.8, xs: 1, sm: 1 },
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            width: "100%",
            fontSize: "40px",
            color: "white",
            mb: 2,
            mx: "auto",
          }}
        >
          Model GPT-3.5 Turbo
        </Typography>

        {/* Messages */}
        <Box
          sx={{
            flex: 1,
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            scrollBehavior: "smooth",
            height: "60vh",
            width: "100%",
          }}
        >
          {chatMessages.map((chat, index) => (
            <ChatItem key={index} content={chat.content} role={chat.role} />
          ))}
        </Box>

        {/* Input */}
        <Box
          sx={{
            width: "100%",
            padding: "20px",
            borderRadius: 8,
            display: "flex",
            bgcolor: "rgba(255, 255, 255, 0.05)",
            mt: 2,
          }}
        >
          <input
            ref={inputRef}
            placeholder="Type your message..."
            style={{
              color: "white",
              padding: "10px",
              border: "none",
              outline: "none",
              width: "100%",
              backgroundColor: "transparent",
              fontSize: "20px",
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
          />
          <IconButton onClick={handleSubmit} sx={{ color: "white", ml: 1 }}>
            <IoMdSend size={24} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
