import React, { useState, useEffect } from 'react';
import API from '../services/api';

const AdminDashboard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await API.get('/courses');
        setCourses(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        await API.delete(`/courses/${id}`);
        setCourses(courses.filter(c => c._id !== id));
      } catch (err) {
        alert('Failed to delete course');
      }
    }
  };

  return (
    <div style={{ padding: '2rem 4rem' }}>
      <h1>Admin Dashboard</h1>
      <h2>Manage All Platform Courses</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem', background: '#fff' }}>
        <thead>
          <tr style={{ background: '#f1f3f5', textAlign: 'left' }}>
            <th style={{ padding: '0.8rem', borderBottom: '1px solid #dee2e6' }}>Title</th>
            <th style={{ padding: '0.8rem', borderBottom: '1px solid #dee2e6' }}>Category</th>
            <th style={{ padding: '0.8rem', borderBottom: '1px solid #dee2e6' }}>Instructor</th>
            <th style={{ padding: '0.8rem', borderBottom: '1px solid #dee2e6' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course._id}>
              <td style={{ padding: '0.8rem', borderBottom: '1px solid #dee2e6' }}>{course.title}</td>
              <td style={{ padding: '0.8rem', borderBottom: '1px solid #dee2e6' }}>{course.category}</td>
              <td style={{ padding: '0.8rem', borderBottom: '1px solid #dee2e6' }}>{course.instructor?.name}</td>
              <td style={{ padding: '0.8rem', borderBottom: '1px solid #dee2e6' }}>
                <button onClick={() => handleDelete(course._id)} style={{ background: '#dc3545', color: '#fff', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '4px' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;