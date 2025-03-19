import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CumulativeAverages = () => {
  const [averages, setAverages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAverages = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/scores/cumulative-averages');
        setAverages(response.data);
      } catch (error) {
        console.error('Error fetching cumulative averages:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAverages();
  }, []);

  if (loading) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>Cumulative Averages per Subject</h2>
      {averages.length === 0 ? (
        <p>No averages available.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Category</th>
              <th>Name</th>
              <th>Average</th>
            </tr>
          </thead>
          <tbody>
            {averages.map((avg) => (
              <tr key={`${avg.category}-${avg.name}`}>
                <td>{avg.category}</td>
                <td>{avg.name}</td>
                <td>{avg.average.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CumulativeAverages;