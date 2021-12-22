import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';

function Login(props) {
  const [inputIDValue, setInputID] = useState('');
  const [inputPWValue, setInputPW] = useState('');
  const [validateWhether, setValidateWhether] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    checkInputValidate();
  }, [inputIDValue, inputPWValue]);

  const checkInputValidate = () => {
    if (inputIDValue.includes('@') && inputPWValue.length >= 5) {
      setValidateWhether(false);
    } else {
      setValidateWhether(true);
    }
  };

  const inputHandler = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'inputID':
        setInputID(value);
        break;
      case 'inputPW':
        setInputPW(value);
        break;
      default:
        return;
    }
  };

  const handleResize = () => {
    const imgBox = document.querySelector('.imgBox');

    window.innerWidth <= 735
      ? imgBox.classList.add('hide')
      : imgBox.classList.remove('hide');
  };

  const loginFunc = () => {
    navigate('/main-hyun');
    // 서버로 입력값을 전달한다.
    // 서버의 응답에 따라 메인 페이지로 이동하거나, alert를 발생시킨다.
    // window.location.href='main.html'
  };

  const enterLoginValidate = event => {
    console.log(event.target);
    if (event.key === 'Enter') {
      loginFunc();
    }
  };

  const forgetPWFunc = () => {
    // 비밀번호 찾기 페이지로 라우팅한다.
  };

  const facebookLoginFunc = () => {
    // 페이스북 로그인 modal를 출력한다.
  };

  const userRegisterFunc = () => {
    // register page로 라우팅한다.
  };

  return (
    <main id="landingContainer">
      <article id="landingArticle">
        <section className="imgBox" />
        <section id="loginBox">
          <div id="inputBox">
            <header>Westagram</header>
            <input
              className="inputID"
              name="inputID"
              maxLength="75"
              type="text"
              required
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={inputIDValue}
              onChange={inputHandler}
              onKeyPress={enterLoginValidate}
            />
            <input
              className="inputPW"
              name="inputPW"
              type="password"
              required
              placeholder="비밀번호"
              value={inputPWValue}
              onChange={inputHandler}
              onKeyPress={enterLoginValidate}
            />
            <button
              className="loginBtn"
              onClick={loginFunc}
              disabled={validateWhether}
            >
              로그인
            </button>
            <section id="loginHrContainer">
              <div className="loginHr" />
              <span>또는</span>
              <div className="loginHr" />
            </section>
            <section id="inputBoxFooter">
              <i className="fab fa-facebook-square" id="facebookLogo" />
              <span id="facebookLogin" onClick={facebookLoginFunc}>
                Facebook으로 로그인
              </span>
            </section>
            <span id="forgetPw" onClick={forgetPWFunc}>
              비밀번호를 잊으셨나요?
            </span>
          </div>
          <div id="registerBox">
            <span>계정이 없으신가요?</span>
            <a href="#!" onClick={userRegisterFunc}>
              가입하기
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}

export default Login;
