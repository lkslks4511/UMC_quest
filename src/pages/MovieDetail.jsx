import { useLocation, useParams } from 'react-router-dom'

import { Base_url } from '../components/Movie'
import React from 'react'

export default function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();
  
  <img src={state && state.poster_path ? Base_url + state.poster_path : ''} alt='영화 포스터 이미지' />
  return (
    <div className='page-container'>
      <div style={{display : 'flex'}}>
        <img style={{width : '400px', height : '500px'}} 
        src={Base_url + state.poster_path} 
        alt='영화 포스터 이미지' />
        <div>
          <div style={{fontSize : "32px"}}>{title}</div>
        </div>
      </div>
    </div>
  )
}
