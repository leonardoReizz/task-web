import { Route, Routes } from "react-router-dom";
import { SignUp } from "../pages/SignUp";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
}
