import React, { useState } from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

export default function App() {
  const [screen, setScreen] = useState('welcome');

  return (
    <>
      {screen === 'welcome' && (
        <WelcomeScreen
          onCreateAccount={() => setScreen('register')}
          onLogin={() => setScreen('login')}
        />
      )}
      {screen === 'login' && (
        <LoginScreen onBack={() => setScreen('welcome')} />
      )}
      {screen === 'register' && (
        <RegisterScreen onBack={() => setScreen('welcome')} onLogin={() => setScreen('login')} />
      )}
    </>
  );
}
