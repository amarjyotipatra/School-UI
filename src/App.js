import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScoreForm from './components/ScoreForm';
import ScoreList from './components/ScoreList';
import AverageScores from './components/AverageScores';
import CumulativeAverages from './components/CumulativeAverages';
import TopScores from './components/TopScores';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/add-score" element={<ScoreForm />} />
          <Route path="/scores/:username" element={<ScoreList />} />
          <Route path="/averages" element={<AverageScores />} />
          <Route path="/cumulative-averages" element={<CumulativeAverages />} />
          <Route path="/top-scores/:subjectName/:classTeacherId" element={<TopScores />} />
          <Route path="/" element={
            <div className="container mt-4">
              <h1>Welcome to School Application</h1>
              <p>Navigate to add scores, view scores, or check averages.</p>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;