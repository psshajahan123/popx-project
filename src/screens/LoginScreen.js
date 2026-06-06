import React, { useState } from 'react';
import PhoneShell from '../components/PhoneShell';
import FloatingInput from '../components/FloatingInput';
import './LoginScreen.css';

export default function LoginScreen({ onBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValid = email.trim() !== '' && password.trim() !== '';

  const handleLogin = () => {
    if (!isValid) return;
    alert(`Welcome back! Logged in as ${email}`);
  };

  return (
    <PhoneShell>
      <div className="login-screen">
        <div className="login-content">
          <h1 className="login-title">
            Signin to your<br />PopX account
          </h1>
          <p className="login-subtitle">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit,
          </p>

          <div className="login-form">
            <FloatingInput
              label="Email Address"
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <FloatingInput
              label="Password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <button
              className={`btn-login ${isValid ? 'active' : ''}`}
              onClick={handleLogin}
              disabled={!isValid}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </PhoneShell>
  );
}
