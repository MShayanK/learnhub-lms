import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div style={{ border: '1px solid #dee2e6', borderRadius: '8px', padding: '1.5rem', background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <span style={{ background: '#e9ecef', padding: '0.2rem 0.6rem', fontSize: '0.8rem', borderRadius: '4px' }}>{course.category}</span>
      <h3 style={{ margin: '0.8rem 0 0.4rem 0' }}>{course.title}</h3>
      <p style={{ color: '#6c757d', fontSize: '0.9rem', minHeight: '40px' }}>{course.description.substring(0, 80)}...</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
        <strong>${course.price}</strong>
        <Link to={`/courses/${course._id}`} style={{ background: '#0d6efd', color: '#fff', padding: '0.4rem 0.8rem', borderRadius: '4px', textDecoration: 'none', fontSize: '0.9rem' }}>View Details</Link>
      </div>
    </div>
  );
};

export default CourseCard;