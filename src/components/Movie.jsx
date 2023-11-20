import React from 'react';
import {useNavigate} from 'react-router-dom';

export const Base_url = 'https://image.tmdb.org/t/p/w1280/';

export default function Movie( props ) {
  const navigate = useNavigate();

  const onClickMovie = () => {
    navigate(`/movie/${props.title}`, { state: props });
  };
  
  return (
    <div className="movie-container" onClick={onClickMovie}>
      <img src={Base_url + props.poster_path} alt="영화 포스터" />
      <div className="movie-info">
        <h4>{props.title}</h4>
        <span>{props.vote_average}</span>
      </div>
    </div>
  );
}
