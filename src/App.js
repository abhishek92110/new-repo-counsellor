import React, { useState } from 'react';
import LoginPanel from './LoginPanel';
import AdminPanel from './AdminPanel';
import CounsellorPanel from './CounsellorPanel';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
  };

  return (
    <div className="app">
      {!isLoggedIn ? (
        <LoginPanel onLogin={() => handleLogin('jgjg')} />
        // For simplicity, assuming only Admin login here.
        // You can modify this logic to differentiate between Admin and Counsellor.
      ) : userRole === 'admin' ? (
        <AdminPanel />
      ) : (
        <CounsellorPanel />
      )}
    </div>
  );
};

export default App;
