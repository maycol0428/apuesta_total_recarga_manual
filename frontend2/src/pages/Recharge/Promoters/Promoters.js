import React, { useState } from "react";
import styled from "styled-components";
import bcpIMG from "assets/img/bcp.png";
import interbankIMG from "assets/img/interbank.png";
import yapeIMG from "assets/img/yape.png";
import hexAlpha from "hex-alpha";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { setPromoter } from "state/features/PromoterSlice";
const PromotersStyled = styled.div`
  color: #dfd8d6;
  background: ${hexAlpha("#0d1c4f", 0.2)};
  padding: 2rem;
  backdrop-filter: blur(5px);
  border-radius: 1rem;
  .title {
    font-size: 3.2rem;
    font-weight: 700;
    border-bottom: 2px solid ${hexAlpha("#dfd8d6", 0.2)};
    margin-bottom: 1rem;
  }
  .promotersList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
`;

const paymentMethodsOBJ = {
  BCP: bcpIMG,
  INTERBANK: interbankIMG,
  YAPE: yapeIMG,
};

const PromoterCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 1rem;
  border-radius: 1rem;
  transition: 0.2s;
  background: ${hexAlpha("#587bb0", 0.3)};
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }

  .name__promoter {
    .name {
      font-size: 2.2rem;
    }
  }
  .rechargeDelay {
    flex: 1;
    .rechargeDelay__title {
      color: #dfd8d6;
      font-weight: 500;
      font-size: 1.6rem;
    }
    .rechargeDelay__desc {
      font-size: 1.4rem;
      color: ${hexAlpha("#dfd8d6", 0.8)};
    }
  }
  .paymentMethods {
    .paymentMethods__title {
      font-size: 1.6rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
    .paymentMethods__list {
      display: grid;
      align-items: center;
      background-color: #eaeeff;
      border-radius: 1rem;
      grid-template-columns: repeat(4, 1fr);
      .img {
        height: 50px;

        img {
          margin: auto;
          height: 50px;
          max-width: 100px;
          object-fit: cover;
        }
      }
    }
  }
  &.active {
    box-shadow: #f3d878 0px 0px 4px 0px;
    border: 1px solid #f3d878;
  }
`;

const PromoterCard = ({
  active,
  name,
  rechargeDelay,
  paymentMethods,
  setIndexActivePromoter,
  index,
  id,
}) => {
  const [activePromoterCard, setactivePromoterCard] = useState(null);
  const dispatch = useDispatch();
  return (
    <PromoterCardStyled
      className={classNames({ active })}
      onClick={() => {
        setIndexActivePromoter(index);
        dispatch(setPromoter(id));
      }}
    >
      <div className="name__promoter">
        <h3 className="name">{name}</h3>
      </div>
      <div className="rechargeDelay">
        <div className="rechargeDelay__title">Retraso de recarga de saldo</div>
        <div className="rechargeDelay__desc">
          {rechargeDelay.hours !== 0 && `${rechargeDelay.hours} Hora con`}{" "}
          {rechargeDelay.minutes} minutos aproximadamente
        </div>
      </div>
      <div className="paymentMethods">
        <div className="paymentMethods__title">Metodos de pago:</div>
        <div className="paymentMethods__list">
          {paymentMethods.map((pM, i) => {
            return (
              <div className={classNames("img")} key={i}>
                <img src={paymentMethodsOBJ[pM]}></img>
              </div>
            );
          })}
        </div>
      </div>
    </PromoterCardStyled>
  );
};

const promoters = [
  {
    id: 1,
    name: "Maycol Christian",
    rechargeDelay: { hours: 2, minutes: 10 },
    paymentMethods: ["BCP", "INTERBANK", "YAPE"],
    socials: {
      whatsapp: "+51975565407",
      telegram: "+51975565407",
    },
  },
  {
    id: 2,
    name: "Ivone Aponte",
    rechargeDelay: { hours: 1, minutes: 20 },
    paymentMethods: ["INTERBANK"],
  },
  {
    id: 3,
    name: "Pepe Gonzales",
    rechargeDelay: { hours: 0, minutes: 5 },
    paymentMethods: ["BCP", "YAPE"],
  },
];

const Promoters = () => {
  const [IndexActivePromoter, setIndexActivePromoter] = useState(null);
  return (
    <PromotersStyled>
      <h2 className="title">Promotores</h2>
      <div className="promotersList">
        {promoters
          .sort(
            (
              { rechargeDelay: rechargeDelayA },
              { rechargeDelay: rechargeDelayB }
            ) => {
              if (rechargeDelayA.hours > rechargeDelayB.hours) return 1;
              if (rechargeDelayA.hours < rechargeDelayB.hours) return -1;
              if (rechargeDelayA.minutes > rechargeDelayB.minutes) return 1;
              if (rechargeDelayA.minutes < rechargeDelayB.minutes) return -1;
              return 0;
            }
          )
          .map(({ name, rechargeDelay, paymentMethods, id }, i) => (
            <PromoterCard
              active={IndexActivePromoter === i}
              id={id}
              index={i}
              key={i}
              name={name}
              paymentMethods={paymentMethods}
              rechargeDelay={rechargeDelay}
              setIndexActivePromoter={setIndexActivePromoter}
            />
          ))}
      </div>
    </PromotersStyled>
  );
};

export default Promoters;
