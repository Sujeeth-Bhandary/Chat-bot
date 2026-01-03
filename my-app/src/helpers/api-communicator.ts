import axios from "axios";

// Configure axios defaults
axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.withCredentials = true;
axios.defaults.headers.common["Content-Type"] = "application/json";

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
    const res = await axios.get("/user/auth-status"); // Changed from post to get
    return res.data;
  } catch (err: any) {
    console.error("Auth Error:", err.response?.data);
    throw new Error(err.response?.data?.message || "Unable to authenticate");
  }
};

// Send chat request
export const sendChatRequest = async (message: string) => {
  try {
    const res = await axios.post("/chat/new", { message });
    return res.data;
  } catch (err: any) {
    console.error("Chat Error:", err.response?.data);
    throw new Error(err.response?.data?.message || "Unable to send chat");
  }
};
