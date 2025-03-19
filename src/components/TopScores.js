import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TopScores = () => {
  const { subjectName, classTeacherId } = useParams();
  const [topScores, setTopScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopScores = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/scores/top3/${subjectName}/${classTeacherId}`);
        setTopScores(response.data);
      } catch (error) {
        console.error('Error fetching top scores:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTopScores();
  }, [subjectName, classTeacherId]);

  if (loading) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>Top 3 Scores for {subjectName} (Class Teacher ID: {classTeacherId})</h2>
      {topScores.length === 0 ? (
        <p>No top scores available.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Child ID</th>
              <th>Child Name</th>
              <th>Score</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            {topScores.map((score) => (
              <tr key={score.childId}>
                <td>{score.childId}</td>
                <td>{score.childName}</td>
                <td>{score.score.toFixed(2)}</td>
                <td>{score.subjectName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TopScores;