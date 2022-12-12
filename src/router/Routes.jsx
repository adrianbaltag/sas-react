import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";

export const Routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </>
  );
};
