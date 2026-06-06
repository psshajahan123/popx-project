import React, { useState } from 'react';
import './FloatingInput.css';

export default function FloatingInput({ label, type, placeholder, value, onChange, required }) {
  const [focused, setFocused] = useState(false);

  const isActive = focused || value !== '';

  return (
    <div className={`floating-input-wrapper ${isActive ? 'active' : ''} ${focused ? 'focused' : ''}`}>
      <label className="floating-label">
        {label}{required && <span className="req-star">*</span>}
      </label>
      <input
        className="floating-input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}
