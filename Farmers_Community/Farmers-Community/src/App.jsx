import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import AgriMachines from "./Components/AgriMachines";
import Animals from "./Components/Animals";
import Fertilizers from "./Components/Fertilizers";
import Spray from "./Components/Spray";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      {/* MODALS */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}

      <Routes>
        <Route
          path="/"
          element={
            <Layout
              onLogin={() => {
                setShowLogin(true);
                setShowSignup(false);
              }}
              onSignup={() => {
                setShowSignup(true);
                setShowLogin(false);
              }}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="market/agrimachines" element={<AgriMachines />} />
          <Route path="market/animals" element={<Animals />}/>
          <Route path="market/fertilizers" element={<Fertilizers />} />
          <Route path="market/spray" element={<Spray />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
