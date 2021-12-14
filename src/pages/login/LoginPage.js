import React, {useState, useEffect} from 'react'
import './login.scss'

function LoginPage(props){

    const [inputIDValue,setInputID] = useState('');
    const [inputPWValue,setInputPW] = useState('');

    useEffect(()=>{
        window.addEventListener('resize',function(event){
            const imgBox = document.querySelector('#imgBox')
            if (window.innerWidth<=735){
                imgBox.style.display='none';
            }else{
                imgBox.style.display='block';
            }
        })
    },[])

    useEffect(()=>{
        const loginBtn = document.querySelector('.loginBtn');
        
        if (inputIDValue.includes('@') && inputPWValue.length>=5){
            loginBtn.style.backgroundColor='rgba(var(--d69,0,149,246),1)'
            loginBtn.style.cursor='pointer';
            loginBtn.removeAttribute('disabled');
        }else{
            loginBtn.style.backgroundColor='rgba(var(--d69,0,149,246),.3)'
            loginBtn.style.cursor='inherit';
            loginBtn.setAttribute('disabled',true);
        }
    },[inputIDValue,inputPWValue])

    const loginFunc = () =>{
        if (inputIDValue.includes('@') && inputPWValue.length>=5){
            // 서버로 입력값을 전달한다.
            // 서버의 응답에 따라 메인 페이지로 이동하거나, alert를 발생시킨다.
            // window.location.href='main.html'
        }
    }
    
    const forgetPWFunc = () =>{
        // 비밀번호 찾기 페이지로 라우팅한다.
    }
    
    const facebookLoginFunc = () =>{
        // 페이스북 로그인 modal를 출력한다.
    }

    return(
        <>
        <main id='landingContainer'>
            <article id='landingArticle'>
                <section id='imgBox'>
                    
                </section>
                <section id='loginBox'>
                    <div id='inputBox'>
                        <header>Westagram</header>
                        <input className='inputID' maxLength='75' type='text' required placeholder="전화번호, 사용자 이름 또는 이메일" value={inputIDValue} onChange={(e)=> setInputID(e.target.value)}/>
                        <input className='inputPW' type='password' required placeholder='비밀번호' value={inputPWValue} onChange={(e)=> setInputPW(e.target.value)}/>
                        <button className='loginBtn' onClick={loginFunc} disabled>로그인</button>
                        <section id='loginHrContainer'>
                            <div className='loginHr'></div>
                            <span>또는</span>
                            <div className='loginHr'></div>
                        </section>
                        <section id='inputBoxFooter'>
                            <i className="fab fa-facebook-square" id='facebookLogo'></i>
                            <span id='facebookLogin' onClick={facebookLoginFunc}>Facebook으로 로그인</span>
                        </section>
                        <span id='forgetPw' onClick={forgetPWFunc}>비밀번호를 잊으셨나요?</span>
                    </div>
                    <div id='registerBox'>
                        <span>계정이 없으신가요?</span>
                        <a href='#!'>가입하기</a>
                    </div>
                </section>
            </article>
        </main>           
        </>
    )
}

export default LoginPage