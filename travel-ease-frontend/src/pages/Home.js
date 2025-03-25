import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home">
    <h1>Welcome to TravelEase</h1>
    <p>Book your flights and hotels with ease.</p>
    <Link to="/search" className="btn btn-primary">Explore Now</Link>
  </div>
);

export default Home;