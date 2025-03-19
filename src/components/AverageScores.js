import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AverageScores = () => {
  const [averages, setAverages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAverages = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/scores/averages');
        setAverages(response.data);
      } catch (error) {
        console.error('Error fetching averages:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAverages();
  }, []);

  if (loading) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>Average Scores per Subject per Class</h2>
      {averages.length === 0 ? (
        <p>No averages available.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Subject Name</th>
              <th>Average Score</th>
              <th>Class Teacher ID</th>
            </tr>
          </thead>
          <tbody>
            {averages.map((avg) => (
              <tr key={`${avg.subjectName}-${avg.classTeacherId}`}>
                <td>{avg.subjectName}</td>
                <td>{avg.avgScore.toFixed(2)}</td>
                <td>{avg.classTeacherId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AverageScores;