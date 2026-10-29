import React, { useState, useEffect } from 'react';
import API from '../services/api';
import CourseCard from '../components/CourseCard';

const StudentDashboard = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const { data } = await API.get('/enrollments/my-courses');
        setEnrollments(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchEnrollments();
  }, []);

  if (loading) return <div style={{ textAlign: 'center', padding: '3rem' }}>Loading your courses...</div>;

  return (
    <div style={{ padding: '2rem 4rem' }}>
      <h1>Student Dashboard</h1>
      <h2>My Enrolled Courses</h2>
      {enrollments.length === 0 ? <p>You are not enrolled in any courses yet.</p> : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem', marginTop: '1.5rem' }}>
          {enrollments.map(item => (
            <CourseCard key={item._id} course={item.course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;