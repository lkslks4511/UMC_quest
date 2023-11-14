import React, { useState } from 'react';

export default function LoginControl() {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setLoggedIn(!isLoggedIn);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <button className='login-btn' onClick={handleLoginClick}>
            {isLoggedIn ? '로그아웃' : '로그인'}
        </button>
        <div className='login-info' style={{ marginLeft: '10px' }}>
            {isLoggedIn ? '환영합니다!' : '로그인 해주세요!'}
        </div>
        </div>
    );
    }
