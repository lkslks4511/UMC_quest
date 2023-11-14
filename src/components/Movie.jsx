import React from 'react';
import { useNavigate } from 'react-router-dom';

const Base_url = 'https://image.tmdb.org/t/p/w1280/';

function Movie({ title, poster_path, vote_average }) {
    const navigate = useNavigate();
  
    const onClickPoster = () => {
      navigate(`/movie/${encodeURIComponent(title)}`, {
        state: {
          Base_url: Base_url, // 객체로 감싸지 않음
          poster_path: poster_path, // 객체로 감싸지 않음
        },
      });
    };
  
    return (
      <div onClick={onClickPoster} className="movie-container">
        <img src={Base_url + poster_path} alt="영화 포스터" />
        <div className="movie-info">
          <h4>{title}</h4>
          <span>{vote_average}</span>
        </div>
      </div>
    );
  }
  

export default Movie;
