import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./componentsOf/Header/Header";
import styled from "styled-components";
import hexAlpha from "hex-alpha";
import { userSelector } from "state/features/UserSlice";
import { useSelector } from "react-redux";

const DefaultLayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: transparent;

  .buttonPannelPromoter {
    position: fixed;
    top: 100px;
    right: 2rem;
    display: flex;
    align-items: center;
    background-color: #3f4756;
    border-radius: 1rem;
    padding: 1rem 2rem;
    color: #eaeeff;
    font-size: 2.5rem;
    border: 1px solid #d5a419;
    cursor: pointer;
    span {
      position: absolute;
      font-size: 1.2rem;
      background-color: ${hexAlpha("#3f4756", 0.9)};
      border: 1px solid #d5a419;
      padding: 1rem;
      white-space: nowrap;
      border-radius: 1rem;
      right: calc(100% + 5px);
      color: #eaeeff;
      opacity: 0;
      transform: translateX(5px);
      transition: 0.2s;
    }
    &:hover span {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

const DefaultLayout = () => {
  const user = useSelector(userSelector);
  const nav = useNavigate();
  const handleGoPromoterPannel = () => nav("dashboard/promoter");
  return (
    <DefaultLayoutStyled>
      <Header></Header>
      <Outlet />
      {user?.role === "promoter" && (
        <div className="buttonPannelPromoter" onClick={handleGoPromoterPannel}>
          <ion-icon name="grid-outline"></ion-icon>
          <span>Promoter Pannel</span>
        </div>
      )}
    </DefaultLayoutStyled>
  );
};

export default DefaultLayout;
