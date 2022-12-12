import Navbar from "./components/Navbar";
// import { Routes, Route } from "./router/Routes";
import "./app.css";
import { Routes, Route } from "react-router-dom";
import { Profile } from "./pages/Profile";
import { NoPage } from "./pages/NoPage";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return (
    <>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
