import { Route, Routes } from "react-router-dom";
import { SignUp } from "../pages/SignUp";
import { LogIn } from "../pages/Login";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<LogIn />} />
    </Routes>
  );
}
