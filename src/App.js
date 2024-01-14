import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import DashboardPage from "./components/DashboardPage";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (usernameInput) => {
    setUsername(usernameInput);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Login
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                setUsername={setUsername}
                handleLogin={handleLogin}
              />
            }
          />
          <Route
            path="/dashboard"
            element={<DashboardPage loggedIn={loggedIn} username={username} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
