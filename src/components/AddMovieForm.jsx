// src/components/AddMovieForm.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovieForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    navigate('/');
  };

  return (
    <div className="add-movie-form">
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" required />
        </div>
        <div>
          <label>Director:</label>
          <input type="text" name="director" required />
        </div>
        <div>
          <label>Genre:</label>
          <select name="genre" required>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Science Fiction">Science Fiction</option>
          </select>
        </div>
        <div>
          <label>Release Year:</label>
          <input type="number" name="releaseYear" required />
        </div>
        <div>
          <label>Synopsis:</label>
          <textarea name="synopsis" required></textarea>
        </div>
        <div>
          <label>Poster Image URL:</label>
          <input type="url" name="posterUrl" required />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovieForm;