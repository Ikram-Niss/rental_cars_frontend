import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage(`✅ Connected`);
      localStorage.setItem('user', JSON.stringify(data));
    } else {
      setMessage(`❌ Erreur de connexion`);
    }
  };

  return (
    <div style={{
      height: '100vh',
      background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <form onSubmit={handleLogin} style={{
        backgroundColor: 'white',
        padding: '40px 30px',
        borderRadius: '20px',
        boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.2)',
        width: '320px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#1e3c72', marginBottom: '25px' }}>Login</h2>

        <input
          type="email"
          placeholder="✉️ Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '12px 14px',
            margin: '10px 0',
            border: '1px solid #ddd',
            borderRadius: '10px',
            outline: 'none'
          }}
        />

        <input
          type="password"
          placeholder="🔒 Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '12px 14px',
            margin: '10px 0',
            border: '1px solid #ddd',
            borderRadius: '10px',
            outline: 'none'
          }}
        />

        <button type="submit" style={{
          width: '100%',
          padding: '12px',
          marginTop: '15px',
          border: 'none',
          backgroundColor: '#2a5298',
          color: 'white',
          fontSize: '16px',
          borderRadius: '10px',
          cursor: 'pointer'
        }}>
          Se connecter
        </button>

        {message && (
          <p style={{
            marginTop: '15px',
            fontSize: '14px',
            color: message.startsWith('✅') ? 'green' : '#d8000c'
          }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
