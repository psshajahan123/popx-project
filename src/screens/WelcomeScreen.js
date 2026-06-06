import React from 'react';
import PhoneShell from '../components/PhoneShell';
import './WelcomeScreen.css';

export default function WelcomeScreen({ onCreateAccount, onLogin }) {
  return (
    <PhoneShell>
      <div className="welcome-screen">
        <div className="welcome-content">
          <h1 className="welcome-title">Welcome to PopX</h1>
          <p className="welcome-subtitle">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit.
          </p>
          <div className="welcome-buttons">
            <button className="btn-primary" onClick={onCreateAccount}>
              Create Account
            </button>
            <button className="btn-secondary" onClick={onLogin}>
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </PhoneShell>
  );
}
