import React, { useState } from 'react';
import PhoneShell from '../components/PhoneShell';
import FloatingInput from '../components/FloatingInput';
import './RegisterScreen.css';

export default function RegisterScreen({ onBack, onLogin }) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [isAgency, setIsAgency] = useState(null);

  const isValid = fullName && phone && email && password && isAgency !== null;

  const handleSubmit = () => {
    if (!isValid) return;
    alert(`Account created! Welcome, ${fullName}!`);
  };

  return (
    <PhoneShell>
      <div className="register-screen">
        <div className="register-content">
          <h1 className="register-title">
            Create your<br />PopX account
          </h1>

          <div className="register-form">
            <FloatingInput
              label="Full Name"
              type="text"
              placeholder="Enter full name"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              required
            />
            <FloatingInput
              label="Phone number"
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
            />
            <FloatingInput
              label="Email address"
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <FloatingInput
              label="Password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <FloatingInput
              label="Company name"
              type="text"
              placeholder="Enter company name"
              value={company}
              onChange={e => setCompany(e.target.value)}
            />

            <div className="agency-question">
              <p className="agency-label">
                Are you an Agency?<span className="required">*</span>
              </p>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="agency"
                    value="yes"
                    checked={isAgency === 'yes'}
                    onChange={() => setIsAgency('yes')}
                  />
                  <span className="radio-circle"></span>
                  Yes
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="agency"
                    value="no"
                    checked={isAgency === 'no'}
                    onChange={() => setIsAgency('no')}
                  />
                  <span className="radio-circle"></span>
                  No
                </label>
              </div>
            </div>

            <button
              className={`btn-register ${isValid ? 'active' : ''}`}
              onClick={handleSubmit}
              disabled={!isValid}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </PhoneShell>
  );
}
