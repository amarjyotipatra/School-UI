import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">School Application</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/add-score">Add Score</Link>
          <Link className="nav-link" to="/scores/child1">View Scores</Link>
          <Link className="nav-link" to="/averages">View Averages</Link>
          <Link className="nav-link" to="/cumulative-averages">Cumulative Averages</Link>
          <Link className="nav-link" to="/top-scores/Math/1">Top Scores</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;