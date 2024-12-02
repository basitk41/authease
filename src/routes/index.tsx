import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "@/pages/homepage";
import LoginPage from "@/pages/login";
import Signuppage from "@/pages/signup";
import OTPPage from "@/pages/otp";
import Layout from "@/components/layout";

const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path="/otp" element={<OTPPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
