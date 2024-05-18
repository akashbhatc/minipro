import React from "react";
import Login from "./pages/auth/login/Loginpage";
import Signuppage from "./pages/auth/signup/Signuppage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./student/DashBoard";
import Queries from "./student/Queries";
import Wishlist from "./student/Wishlist";
import ADashBoard from "./Alumni/ADashBoard";
import AQueries from "./Alumni/Queries";
import Alumni from "./Admin/Alumni";
import Companies from "./Admin/companies";  
import Adqueries from "./Admin/queries";
import Students from "./Admin/Students";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route exact path="/student/queries" element={<Queries />} />
          <Route exact path="/student/dashboard" element={<DashBoard />} />
          <Route exact path="/student/wishlist" element={<Wishlist />} />
          <Route exact path="/alumni/dashboard" element={<ADashBoard />} />
          <Route exact path="/alumni/queries" element={<AQueries />} />
          <Route exact path="/admin/alumni" element={<Alumni />} />
          <Route exact path="/admin/companies" element={<Companies />} />
          <Route exact path="/admin/queries" element={<Adqueries />} />
          <Route exact path="/admin/student" element={<Students />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
