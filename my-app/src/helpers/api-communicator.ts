import axios from "axios";

// Login user
export const LoginUser = async (email: string, password: string) => {
  try {
    const res = await axios.post("/user/login", { email, password });
    return res.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Unable to login");
  }
};

// Check authentication status
export const CheckAuthStatus = async () => {
  try {
    const res = await axios.post("/user/auth-status");
    return res.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Unable to authenticate");
  }
};

// Send chat request
export const sendChatRequest = async (message: string) => {
  try {
    const res = await axios.post("/chat/new", { message });
    return res.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Unable to send chat");
  }
};
    