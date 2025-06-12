import axios from "axios";
export const LoginUser=async (email:string,password:string) => {
    const res=await axios.post("/user/login",{email,password})
    if(res.status!=200){
        throw new Error("Unable to login");
        
    }
    const data=await res.data;
    return data;
};

export const CheckAuthStatus=async () => {
    const res=await axios.post("/user/auth-status")
    if(res.status!=200){
        throw new Error("Unable to authenticate");
        
    }
    const data=await res.data;
    return data;
};