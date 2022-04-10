import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CoinsSVG from "./CoinsSVG";

const ButtonChargueStyled = styled.div`
  background: #9c0032;
  position: relative;
  padding: 1rem 2rem;
  border-radius: 1rem;
  color: white;
  font-size: 1.6rem;
  font-weight: 500;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  cursor: pointer;

  @media (max-width: 700px) {
    padding: 0.5rem 1rem;
    font-size: 1.3rem;
  }
  .coins__svg {
    position: absolute;
    right: -1rem;
    bottom: 0;
    width: 2rem;
    height: 2rem;
    object-fit: cover;
  }
`;

const ButtonChargue = () => {
  const nav = useNavigate();
  const handleGoRechargePage = () => {
    nav("/recharge");
  };
  return (
    <ButtonChargueStyled onClick={handleGoRechargePage}>
      RECARGA
      <div className="coins__svg">
        <CoinsSVG></CoinsSVG>
      </div>
    </ButtonChargueStyled>
  );
};

export default ButtonChargue;
