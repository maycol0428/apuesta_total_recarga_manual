import hexAlpha from "hex-alpha";
import React from "react";
import styled from "styled-components";
import whatsappIMG from "assets/img/whatsapp.png";
import telegramIMG from "assets/img/telegram.png";
import bcpIMG from "assets/img/bcp.png";
import interbankIMG from "assets/img/interbank.png";
import yapeIMG from "assets/img/yape.png";
import { useSelector } from "react-redux";
import { userSelector } from "state/features/UserSlice";
const PromoterInfoStyled = styled.div`
  margin-top: 1rem;
  padding: 2rem;
  border-radius: 1rem;
  /* background-color: ${hexAlpha("#dcd4d2", 0.1)}; */
  h4 {
    color: #eaeeff;
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  .nameTitle {
    color: #d5a419;
    font-size: 3rem;
  }
  .socials {
    display: flex;
    gap: 1rem;
    background: ${hexAlpha("#5C85D6", 0.4)};
    width: fit-content;
    padding: 1rem;
    border-radius: 1rem;
    flex-wrap: wrap;
    .social {
      flex: 1;
      cursor: pointer;
      color: white;
      background: ${hexAlpha("#9FC1FF", 0.3)};
      padding: 1rem;
      border-radius: 1rem;
      font-weight: 500;
      font-size: 1.7rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      transition: 0.2s;
      border: 2px solid transparent;
      :hover {
        opacity: 0.7;
        border: 2px solid white;
      }
      img {
        width: 40px;
        max-width: 40px;
      }
      &.telegram {
        background-color: #0d1c4f;
      }
      &.whatsapp {
        background-color: #008a62;
      }
    }
  }
  .listPaymentMethods {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1.5rem;
    .paymentMethod {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      display: flex;
      border-bottom-left-radius: 1rem;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
      overflow: hidden;
      align-items: center;
      background: #424656;
      .left {
        background-color: #eaeeff;
        width: 150px;
        height: 100px;
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
        display: flex;
        img {
          object-fit: contain;
          &.INTERBANK {
            transform: scale(1.6);
          }
        }
      }
      .right {
        padding-left: 2rem;
        padding-right: 1rem;
        color: #eaeeff;
        flex: 1;
        > hr {
          border-color: ${hexAlpha("#eaeeff", 0.3)};
          margin-top: 1rem;
          margin-bottom: 1rem;
          height: 1px;
        }
        .titular {
          font-size: 1.5rem;
        }
        .number {
          font-size: 1.5rem;
          letter-spacing: 0.1rem;
          white-space: nowrap;
        }
      }
    }
  }
`;
const paymentMethodsOBJ = {
  BCP: bcpIMG,
  INTERBANK: interbankIMG,
  YAPE: yapeIMG,
};
const PromoterInfo = ({ promoter }) => {
  const currentUser = useSelector(userSelector);
  const handleGenerateWspLink = () => {
    const text = `https://api.whatsapp.com/send?phone=51950341940&text=Hola%2C%20quiero%20una%20recarga%20mi%20playerId%20es%20*${currentUser.playerId}*`;
    window.open(text);
  };

  return (
    <PromoterInfoStyled>
      <h3 className="nameTitle">{promoter.name}</h3>
      <h4>Medios de comunicacion</h4>
      <div className="socials">
        <div className="social whatsapp" onClick={() => handleGenerateWspLink()}>
          <img alt="" src={whatsappIMG} />
          {promoter.socials.telegram}
        </div>
        <div className="social telegram">
          <img alt="" src={telegramIMG} />

          {promoter.socials.whatsapp}
        </div>
      </div>
      <h4>Medios de pagos disponibles</h4>
      <ul className="listPaymentMethods">
        {Array.from(promoter.paymentMethods).map((pM, i) => {
          const type = Object.keys(pM)[0];
          return (
            <div className="paymentMethod" key={i}>
              <div className="left">
                <img alt="" className={type} src={paymentMethodsOBJ[Object.keys(pM)[0]]} />
              </div>
              <div className="right">
                <span className="titular">{promoter.name}</span>
                <hr />
                <span className="number">{pM[type]}</span>
              </div>
            </div>
          );
        })}
      </ul>
    </PromoterInfoStyled>
  );
};

export default PromoterInfo;
