import React from 'react';
import './PhoneShell.css';

export default function PhoneShell({ children }) {
  return (
    <div className="phone-shell">
      <div className="phone-screen">{children}</div>
    </div>
  );
}
