import { React } from "react";
import Login from "./pages/auth/login/Loginpage";
import Signuppage from "./pages/auth/signup/Signuppage";
import { BrowserRouter as  Route } from "react-router-dom";
import { Routes } from "react-router-dom";
const App = () => {
  return (
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signuppage />} />
        </Routes>
      </div>
  );
};

export default App;
