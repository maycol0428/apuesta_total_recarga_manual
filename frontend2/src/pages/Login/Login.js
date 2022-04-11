import hexAlpha from "hex-alpha";
import React, { useRef } from "react";
import fifaIMG from "assets/img/fifa.jpg";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setUser } from "state/features/UserSlice";
import { useNavigate } from "react-router-dom";
const LoginStyled = styled.div`
  flex: 1;
  background: url(${fifaIMG});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  .page__wrapper {
    margin: initial;
    flex: 0.5;
  }

  form {
    background: ${hexAlpha("#29509C", 1)};
    border-radius: 2rem;
    overflow: hidden;
    backdrop-filter: blur(0.7rem);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    .form__wrap {
      padding: clamp(2rem, 5vw, 8rem);
      padding-top: 10rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .form__title {
      font-size: 4rem;
      font-weight: 700;
      color: #dfd8d6;
      align-self: center;
      margin-bottom: 2rem;
    }
    input {
      padding: 1rem;
      border-radius: 1rem;
      min-width: 250px;
      outline: none;
      border: none;
      font-size: 1.5rem;
      font-weight: 500;
      background: #dfd8d6;
    }
    button {
      margin-top: 1rem;
      width: fit-content;
      align-self: center;
      border-radius: 1rem;
      background: #9c0032;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      font-weight: 500;
      padding: 1rem 2rem;
      cursor: pointer;
    }
  }
`;

const Login = () => {
  const formRef = useRef(null);
  const dispath = useDispatch();
  const nav = useNavigate();

  const handleSumbit = (e) => {
    e.preventDefault();
    const loginOBJ = Object.fromEntries(new FormData(formRef.current));
    console.log(loginOBJ);
    fetch("http://192.168.1.36:8000/api/v1/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginOBJ),
    }).then(async (res) => {
      const json = await res.json();
      dispath(setUser({ user: json.user, accessToken: json.accessToken }));
      nav("/");
    });
  };

  return (
    <LoginStyled className="page">
      <div className="page__wrapper">
        <form ref={formRef}>
          <div className="form__wrap">
            <header className="form__title">Log In</header>
            <input
              autoComplete="off"
              name="playerId"
              placeholder="Player 
            ID"
              type="text"
            />
            <input name="password" placeholder="Password" type="password" value="12345678" />
            <button onClick={handleSumbit} type="button">
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </LoginStyled>
  );
};

export default Login;
