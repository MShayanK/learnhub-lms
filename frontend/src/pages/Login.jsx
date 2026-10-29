import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/auth/login', { email, password });
      localStorage.setItem('user', JSON.stringify(data));
      if (data.role === 'Admin') navigate('/admin-dashboard');
      else if (data.role === 'Instructor') navigate('/instructor-dashboard');
      else navigate('/student-dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '4rem auto', padding: '2rem', border: '1px solid #dee2e6', borderRadius: '8px', background: '#fff' }}>
      <h2>Login to LearnHub</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        <button type="submit" style={{ background: '#0d6efd', color: '#fff', border: 'none', padding: '0.8rem', borderRadius: '4px', fontSize: '1rem' }}>Login</button>
      </form>
      <p style={{ marginTop: '1rem', textAlign: 'center' }}>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
};

export default Login;