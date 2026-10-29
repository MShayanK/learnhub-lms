import React, { useState, useEffect } from 'react';
import API from '../services/api';

const InstructorDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  
  // Lesson state
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonContent, setLessonContent] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const fetchMyCourses = async () => {
    try {
      const { data } = await API.get('/courses');
      const user = JSON.parse(localStorage.getItem('user'));
      setCourses(data.filter(c => c.instructor?._id === user._id || c.instructor === user._id));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMyCourses();
  }, []);

  const handleCreateCourse = async (e) => {
    e.preventDefault();
    try {
      await API.post('/courses', { title, description, category, price: Number(price) });
      setTitle('');
      setDescription('');
      setCategory('');
      setPrice('');
      fetchMyCourses();
      alert('Course created successfully');
    } catch (err) {
      alert('Failed to create course');
    }
  };

  const handleAddLesson = async (e) => {
    e.preventDefault();
    try {
      await API.post('/lessons', { courseId: selectedCourseId, title: lessonTitle, content: lessonContent, videoUrl });
      setLessonTitle('');
      setLessonContent('');
      setVideoUrl('');
      alert('Lesson added successfully');
    } catch (err) {
      alert('Failed to add lesson');
    }
  };

  return (
    <div style={{ padding: '2rem 4rem' }}>
      <h1>Instructor Dashboard</h1>
      
      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #dee2e6' }}>
          <h3>Create New Course</h3>
          <form onSubmit={handleCreateCourse} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required style={{ padding: '0.6rem', border: '1px solid #ccc', borderRadius: '4px' }} />
            <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required style={{ padding: '0.6rem', border: '1px solid #ccc', borderRadius: '4px' }} />
            <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} required style={{ padding: '0.6rem', border: '1px solid #ccc', borderRadius: '4px' }} />
            <input type="number" placeholder="Price ($)" value={price} onChange={e => setPrice(e.target.value)} required style={{ padding: '0.6rem', border: '1px solid #ccc', borderRadius: '4px' }} />
            <button type="submit" style={{ background: '#0d6efd', color: '#fff', border: 'none', padding: '0.7rem', borderRadius: '4px' }}>Create Course</button>
          </form>
        </div>

        <div style={{ flex: 1, background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #dee2e6' }}>
          <h3>Add Lesson to Course</h3>
          <form onSubmit={handleAddLesson} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <select value={selectedCourseId} onChange={e => setSelectedCourseId(e.target.value)} required style={{ padding: '0.6rem', border: '1px solid #ccc', borderRadius: '4px' }}>
              <option value="">Select Course</option>
              {courses.map(c => <option key={c._id} value={c._id}>{c.title}</option>)}
            </select>
            <input type="text" placeholder="Lesson Title" value={lessonTitle} onChange={e => setLessonTitle(e.target.value)} required style={{ padding: '0.6rem', border: '1px solid #ccc', borderRadius: '4px' }} />
            <textarea placeholder="Lesson Content" value={lessonContent} onChange={e => setLessonContent(e.target.value)} required style={{ padding: '0.6rem', border: '1px solid #ccc', borderRadius: '4px' }} />
            <input type="text" placeholder="Video URL" value={videoUrl} onChange={e => setVideoUrl(e.target.value)} required style={{ padding: '0.6rem', border: '1px solid #ccc', borderRadius: '4px' }} />
            <button type="submit" style={{ background: '#28a745', color: '#fff', border: 'none', padding: '0.7rem', borderRadius: '4px' }}>Add Lesson</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;