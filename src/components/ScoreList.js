import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ScoreList = () => {
  const { username } = useParams();
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/children/scores?username=${username}`);
        setScores(response.data);
      } catch (error) {
        console.error('Error fetching scores:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchScores();
  }, [username]);

  if (loading) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>Scores for {username}</h2>
      {scores.length === 0 ? (
        <p>No scores available.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Score</th>
              <th>Child ID</th>
              <th>Subject ID</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score) => (
              <tr key={score.id}>
                <td>{score.id}</td>
                <td>{score.score.toFixed(2)}</td>
                <td>{score.childId}</td>
                <td>{score.subjectId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ScoreList;