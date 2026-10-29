import React, { useState, useEffect } from 'react';
import API from '../services/api';
import CourseCard from '../components/CourseCard';

const CourseListing = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await API.get('/courses');
        setCourses(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch courses');
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  if (loading) return <div style={{ textAlign: 'center', padding: '3rem' }}>Loading courses...</div>;
  if (error) return <div style={{ textAlign: 'center', padding: '3rem', color: 'red' }}>{error}</div>;

  return (
    <div style={{ padding: '2rem 4rem' }}>
      <h2>All Courses</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem', marginTop: '1.5rem' }}>
        {courses.map(course => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseListing;