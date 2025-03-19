import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ScoreForm = () => {
  const [scoreData, setScoreData] = useState({ score: '', childId: '', subjectId: '' });
  const [children, setChildren] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [childrenResp, subjectsResp] = await Promise.all([
          axios.get('http://localhost:8081/api/children'),
          axios.get('http://localhost:8081/api/subjects'),
        ]);
        setChildren(childrenResp.data);
        setSubjects(subjectsResp.data);
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };
    fetchOptions();
  }, []);

  const handleChange = (e) => {
    setScoreData({ ...scoreData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (scoreData.score < 0 || scoreData.score > 100) {
      setError('Score must be between 0 and 100');
      return;
    }
    setError('');
    try {
      await axios.post('http://localhost:8081/api/scores', {
        score: parseFloat(scoreData.score),
        childId: parseInt(scoreData.childId),
        subjectId: parseInt(scoreData.subjectId),
      });
      alert('Score added successfully!');
      navigate('/scores/child1');
    } catch (error) {
      console.error('Error adding score:', error);
      setError('Failed to add score. Check console for details.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New Score</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Score (0-100)</label>
          <input
            type="number"
            className="form-control"
            name="score"
            value={scoreData.score}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Child</label>
          <select
            className="form-control"
            name="childId"
            value={scoreData.childId}
            onChange={handleChange}
            required
          >
            <option value="">Select a child</option>
            {children.map((child) => (
              <option key={child.id} value={child.id}>{child.name} ({child.userName})</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Subject</label>
          <select
            className="form-control"
            name="subjectId"
            value={scoreData.subjectId}
            onChange={handleChange}
            required
          >
            <option value="">Select a subject</option>
            {subjects.map((subject) => (
              <option key={subject.id} value={subject.id}>{subject.subjectName}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ScoreForm;