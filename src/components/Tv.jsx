import React from "react";

const Base_URL = "https://image.tmdb.org/t/p/w1280/";


export default function Tv({name, poster_path, vote_average}) {
    return (
        <div className="tv-container">
            <img src={Base_URL + poster_path} alt="Tv 포스터" />
            <div className="tv-info">
            <h4>{name}</h4>
            <span>{vote_average}</span>
            </div>
        </div>
    );
}