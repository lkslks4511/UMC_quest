import React from 'react'
import { useState } from 'react'

export default function LogIn() {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    
    const [emailValid, setEmailValid] = useState(false);
    const [pwdValid, setpwdValid] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if(regex.test(e.target.value)){
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    }

    const handlePwd = (e) => {
        setPwd(e.target.value);
        const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if(regex.test(pwd)) {
            setpwdValid(true);
        }   else {
            setpwdValid(false);
        }
    }

    return (
    <div className="login-page">
        <div className="title-wrap">
            이메일과 비밀번호를
            <br/>
            입력해주세요
        </div>

        <div className='content-wrap'>
            <div style={{marginTop : "25px"}} className='input-title'>이메일 주소</div>
            <div className='input-wrap'>
                <input 
                type='text'
                className='input' 
                placeholder='email@gmail.com'
                value={email}
                onChange={handleEmail}/>
            </div>
            <div className="error-message-wrap">
                {!emailValid && email.length > 0 && (
                    <div> 올바른 이메일을 입력해주세요. </div>
                )}
            </div>
            <div style={{marginTop : "25px"}} className='input-title'>비밀번호</div>
            <div className='input-wrap'>
                <input 
                type='password'
                className='input' 
                placeholder='영문,숫자,특수문자, 포함 8자 이상'
                value={pwd}
                onChange={handlePwd}/>
            </div>  
            <div className="error-message-wrap">
                {!pwdValid && pwd.length > 0 && (
                    <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                )}
            </div>
        </div>

        <div>
            <button className='check-btn'>
                확인  
            </button>
        </div>
    </div>
    )
}
