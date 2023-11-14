import Movie from "../components/Movie";
import React from 'react'
import { movie_dummy } from "../movieDummy"

export default function Movies() {
  return (
    <div>
      <div className="app-container">
        {movie_dummy.results.map((item) => (
          <Movie
            key={item.id} 
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
          />
        ))}
      </div>
    </div>
  )
}
