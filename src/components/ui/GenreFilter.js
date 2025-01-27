// components/ui/GenreFilter.js
import React from 'react';

export default function GenreFilter({ genres, selectedGenre, onSelectGenre }) {
  return (
    <div className="mb-8">
      <select
        value={selectedGenre}
        onChange={(e) => onSelectGenre(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}