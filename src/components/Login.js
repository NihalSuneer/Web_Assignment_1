import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from './UserContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { login } = useContext(UserContext);

  const handleLogin = () => {
 
    login(email, password);
    history.push('/');
  };

  return (
    <div>
      <h2>Login or Register</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
