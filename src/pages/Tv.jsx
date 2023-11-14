import React from 'react'
import Tv from "../components/Tv";
import {tv_dummy} from "../tvDummy"

export default function Movies() {
  return (
    <div>
        <div className="app-container">
            {tv_dummy.results.map((item) => {
                return ( 
                    <Tv
                    name={item.name}
                    poster_path={item.poster_path}
                    vote_average={item.vote_average}
                    />
                );
            })}

        </div>
    </div>
  )
}
