import React from "react";
import currentUserIMG from "assets/img/brad.jpg";
import PelotaIMG from "assets/img/pelota.png";
import styled from "styled-components";
import hexAlpha from "hex-alpha";
import ButtonChargue from "../ButtonChargue/ButtonChargue";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelector } from "state/features/UserSlice";
import { useMediaQuery } from "react-responsive";
const HeaderStyled = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 2rem;
  .wrapper__header {
    width: 100%;
    max-width: 1600px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .wrapper__header {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    .logo {
      display: flex;
      align-items: center;
      position: relative;
      left: -2rem;
      cursor: pointer;
      .logo_back_img {
        border-radius: 50%;
        width: 60px;
        height: 60px;
        opacity: 0.1;
        position: relative;
        left: 2rem;
        z-index: -1;
        filter: brightness(0) invert(1);
      }
      .logo__firstWord {
        font-weight: 700;
        font-size: clamp(2rem, 3vw, 4rem);
        color: #dfd8d6;
      }
      .logo__secWord {
        font-weight: 700;
        display: flex;
        align-items: center;
        font-size: clamp(2rem, 3vw, 4rem);
        color: #243435;
        background: -webkit-linear-gradient(#edc250, #dbaa43);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .logo_back_img {
        top: 0.2rem;
        position: relative;
        height: clamp(4rem, 3.5vw, 7rem);
        object-fit: contain;
      }
    }
    .user {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      .login {
        background: #3f4756;
        position: relative;
        padding: 1rem 2rem;
        border-radius: 1rem;
        color: #eaeeff;
        font-size: 1.6rem;
        font-weight: 500;
        box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
        text-transform: uppercase;
        transition: 0.2s;
        border: 1px solid #d5a419;
        &:hover {
          opacity: 0.8;
        }
        cursor: pointer;
        @media (max-width: 700px) {
          padding: 0.5rem 1rem;
          font-size: 1.3rem;
        }
      }
      .user__info {
        display: flex;
        flex-direction: column;
        color: white;
        font-size: 1.6rem;
        align-items: flex-end;
        gap: 0.2rem;
        .balance {
          font-size: 1.5rem;
          color: #e4af18;
          font-weight: 800;
          font-family: Roboto;
        }
      }
      .user__img {
        height: 60px;
        width: 60px;
        border: 5px solid ${hexAlpha("#000", 0.4)};
        border-radius: 50%;
        box-shadow: 0 0 0 2px #e4bd51, rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        cursor: pointer;
        @media (max-width: 700px) {
          width: 50px;
          min-width: 50px;
          height: 50px;
        }
        img {
          border-radius: 50%;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;

const Header = () => {
  const nav = useNavigate();
  const user = useSelector(userSelector);
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return (
    <HeaderStyled>
      <div className="wrapper__header">
        <div className="logo" onClick={() => nav("/")}>
          <img className="logo_back_img" src={PelotaIMG} />
          <div className="logo__firstWord">apuesta</div>
          <div className="logo__secWord">total</div>
        </div>
        <ButtonChargue />
        <div className="user">
          {!user ? (
            <button className="login" onClick={() => nav("/login")}>
              Login
            </button>
          ) : (
            <>
              {!isMobile && (
                <div className="user__info">
                  <p>{user?.playerId}</p>
                  <p className="balance">S/.{user?.balance / 100}</p>
                </div>
              )}

              <div className="user__img">
                <img alt="Brad Pit" src={currentUserIMG} />
              </div>
            </>
          )}
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
