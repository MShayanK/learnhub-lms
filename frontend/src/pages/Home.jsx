import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to LearnHub</h1>
      <p style={{ fontSize: '1.2rem', color: '#6c757d', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
        Empower your future with industry-ready full stack web development courses offered by Hunarmand Punjab.
      </p>
      <Link to="/courses" style={{ background: '#0d6efd', color: '#fff', padding: '0.8rem 1.6rem', borderRadius: '6px', fontSize: '1.1rem', textDecoration: 'none' }}>
        Explore Courses
      </Link>
    </div>
  );
};

export default Home;