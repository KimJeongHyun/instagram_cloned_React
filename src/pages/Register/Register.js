import React, { useState, useEffect } from 'react';
import './Register.scss';

export default function Register(props) {
  const [inputID, setInputID] = useState('');
  const [inputPW, setInputPW] = useState('');
  const [disabledValue, setDisabledValue] = useState(true);

  useEffect(() => {
    checkInputValidate();
  }, [inputID, inputPW]);

  const inputHandler = event => {
    const {
      target: { name, value },
    } = event;

    switch (name) {
      case 'inputID':
        setInputID(value);
        break;
      case 'inputPW':
        setInputPW(value);
        break;
      default:
    }
  };

  const checkInputValidate = () => {
    inputID.includes('@') && inputPW.length >= 5
      ? setDisabledValue(false)
      : setDisabledValue(true);
  };

  const registerSubmit = () => {
    // fetch method post
    // let body = {id:, pw:}
    // if state true -> route to login
    // if state false -> operate alert and value init
    inputValueInit();
  };

  const inputValueInit = () => {
    setInputID('');
    setInputPW('');
  };

  return (
    <main id="registerContainer">
      <article id="registerArticle">
        <section id="registerBox">
          <section id="registerInputBox">
            <header>Westagram</header>
            <input
              type="text"
              name="inputID"
              placeholder="아이디"
              value={inputID}
              onChange={inputHandler}
              required
            />
            <input
              type="password"
              name="inputPW"
              placeholder="비밀번호"
              value={inputPW}
              onChange={inputHandler}
              required
            />
            <button onClick={registerSubmit} disabled={disabledValue}>
              회원가입
            </button>
          </section>
        </section>
      </article>
    </main>
  );
}
