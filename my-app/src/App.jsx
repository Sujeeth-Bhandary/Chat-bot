import Header from "./components/header"
import { Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login.tsx"
import Signup from "./Pages/Signup"
import Chat from "./Pages/Chat"
import Notfound from "./Pages/Notfound"
import { useAuth } from "./context/AuthContext"
function App() {
  
  

  return (
  <main>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/chat" element={<Chat/>}/>
      <Route path="/*" element={<Notfound/>}/>
    </Routes>
  </main>
  )
}

export default App
