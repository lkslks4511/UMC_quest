import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate();
    return (
    <div className='page-container'>
        <div style={{
            marginTop : '28px',
            fontSize : '32px',
            fontWeight : 'bold',
            marginBottom : '32px'
        }}>
            해당 페이지를 찾지 못했습니다.
        </div>
        <div style={{
            fontSize : "20px",
            marginBottom : '15px'
        }}>
            주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.
        </div>
        <div 
        onClick={() => navigate('/')}
        style={{
            fontSize : '20px',
            color : 'red',
            cursor: 'pointer'
        }}>
            메인 페이지로 이동
        </div>
    </div>
    )
}
