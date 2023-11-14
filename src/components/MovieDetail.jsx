import { useLocation, useParams } from 'react-router-dom';

import React from 'react';

export default function MovieDetail() {
    const { state } = useLocation();
    const { title } = useParams();
  
    return (
      <div>
        {state && state.Base_url && state.poster_path && (
          <>
            <img
              src={state.Base_url + state.poster_path}
              alt="영화 세부사항"
            />
            <h3>{title}</h3>
          </>
        )}
      </div>
    );
  }
  
