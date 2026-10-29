import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../services/api';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const courseRes = await API.get(`/courses/${id}`);
        setCourse(courseRes.data);
        
        if (user) {
          const lessonsRes = await API.get(`/lessons/course/${id}`);
          setLessons(lessonsRes.data);
        }
        setLoading(false);
      } catch (err) {
        setMessage('Failed to load course details');
        setLoading(false);
      }
    };
    fetchCourseDetails();
  }, [id, user]);

  const handleEnroll = async () => {
    try {
      await API.post('/enrollments', { courseId: id });
      alert('Successfully enrolled in course!');
      navigate('/student-dashboard');
    } catch (err) {
      alert(err.response?.data?.message || 'Enrollment failed');
    }
  };

  if (loading) return <div style={{ textAlign: 'center', padding: '3rem' }}>Loading...</div>;
  if (!course) return <div style={{ textAlign: 'center', padding: '3rem' }}>Course not found</div>;

  return (
    <div style={{ padding: '2rem 4rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{course.title}</h1>
      <p style={{ color: '#6c757d' }}>Category: {course.category}</p>
      <p>{course.description}</p>
      <h3>Instructor: {course.instructor?.name}</h3>
      <h4>Price: ${course.price}</h4>

      {user && user.role === 'Student' && (
        <button onClick={handleEnroll} style={{ background: '#28a745', color: '#fff', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '4px', fontSize: '1rem', marginTop: '1rem' }}>
          Enroll Now
        </button>
      )}

      {user && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Course Lessons</h3>
          {lessons.length === 0 ? <p>No lessons uploaded yet.</p> : (
            <ul>
              {lessons.map(lesson => (
                <li key={lesson._id} style={{ margin: '1rem 0' }}>
                  <strong>{lesson.title}</strong> - <a href={lesson.videoUrl} target="_blank" rel="noreferrer">Watch Video</a>
                  <p>{lesson.content}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default CourseDetail;