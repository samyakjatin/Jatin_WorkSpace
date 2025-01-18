import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import Confirmation from "./Components/Confirmation";
import GetUserData from "./Components/GetUserData";

function App() {
  return (
    <Router >
      <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="/Confirmation" element={<Confirmation />} />
        <Route path="/GetUserData" element={<GetUserData />} />
      </Routes>
    </Router>
  );
}

export default App;