import React, { useState } from 'react';

const LoginPanel = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Authentication logic goes here
//     onLogin(); // Call this function after successful authentication
//   };


const handleLogin = () => {
    const validUsername = 'admin';
    const validPassword = 'password123';
  
    if (username === validUsername && password === validPassword) {
      onLogin(); // Call this function after successful authentication
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-panel">
      <header>
        <h1>Login</h1>
      </header>
      <main>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </main>
      <footer>
        <p>&copy; 2024 MyApp</p>
      </footer>
    </div>
  );
};

export default LoginPanel;
