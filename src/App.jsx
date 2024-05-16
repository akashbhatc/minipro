import React from "react";
import Login from "./pages/auth/login/Loginpage";
import Signuppage from "./pages/auth/signup/Signuppage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signuppage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
