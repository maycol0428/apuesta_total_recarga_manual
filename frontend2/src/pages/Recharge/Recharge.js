import React from "react";
import Promoters from "./Promoters/Promoters";
import styled from "styled-components";
import PromoterInfo from "./PromoterInfo/PromoterInfo";
import { useSelector } from "react-redux";
import { promoterSelector } from "state/features/PromoterSlice";
const RechargeStyled = styled.div`
  .page__wrapper {
    max-width: 1500px;
    padding-top: 2rem;
  }
`;
const DefaultMsgBottomStyled = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    width: fit-content;
    margin: auto;
    font-size: clamp(3rem, 2.5vw, 5rem);
    font-weight: 800;
    color: #d5a419;
  }
  .listRecomend {
    color: #dfd8d6;
    color: white;
    list-style: none;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    cursor: default;
    li {
      text-align: left;
      cursor: text;
      list-style: none;
      display: flex;
      gap: 1rem;
      align-items: center;
      div.circleMarker {
        min-width: 1rem;
        width: 1rem;
        min-height: 1rem;
        height: 1rem;
        background: red;
        border-radius: 50%;
      }
      p {
        font-size: 1.5rem;
      }
    }
  }
`;
const Recharge = () => {
  const promoter = useSelector(promoterSelector);
  return (
    <RechargeStyled className="page">
      <div className="page__wrapper">
        <Promoters></Promoters>
        {!promoter ? (
          <DefaultMsgBottomStyled>
            <div className="title">Elije a un Promotor</div>
            <ul className="listRecomend">
              <li>
                <div className="circleMarker"></div>
                <p>
                  Elije a un promotor que se va encargar de atenderte en
                  cualquiera de sus redes sociales disponibles
                </p>
              </li>
              <li>
                <div className="circleMarker"></div>

                <p>
                  Te sugerimos atenderte con el promotor con menor tiempo en
                  cola para que tu recarga se realize mas rapido
                </p>
              </li>
              <li>
                <div className="circleMarker"></div>

                <p>
                  Ten listo tu Vaucher y tu PlayerID para enviarselo al promotor
                  que te atendera
                </p>
              </li>
            </ul>
          </DefaultMsgBottomStyled>
        ) : (
          <PromoterInfo promoter={promoter}></PromoterInfo>
        )}
      </div>
    </RechargeStyled>
  );
};

export default Recharge;
