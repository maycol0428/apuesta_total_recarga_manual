import classNames from "classnames";
import hexAlpha from "hex-alpha";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRechargePromoter, rechargePromoterSelector, setRecharge, setRecharges } from "state/features/RechargePromoterSlice";
import { userSelector } from "state/features/UserSlice";
import styled from "styled-components";

const RechargeListStyled = styled.div`
  padding: 1rem;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
  .row {
    background: ${hexAlpha("#424656", 1)};
    padding: 1rem;
    border-radius: 1rem;
    color: #eaeeff;
    display: grid;
    grid-template-columns: repeat(auto-fit, 150px);
    row-gap: 0.5rem;
    cursor: pointer;
    column-gap: 0.5rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    :nth-child(even) {
    }
    .row__item {
      font-size: 1.4rem;
      .title {
        color: ${hexAlpha("#eaeeff", 0.5)};
        font-size: 1.2rem;
      }
      .amount,
      .createdAt {
        font-family: Roboto;
      }
      .createdAt {
      }
    }
  }
`;

const RechargeList = () => {
  const listRecharge = useSelector(rechargePromoterSelector);
  const currentUser = useSelector(userSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      fetch(`http://192.168.1.36:8000/api/v1/recharges/${currentUser?._id}`).then(async (res) => {
        const json = await res.json();
        dispatch(setRecharges(json.recharges));
      });
    }
  }, [currentUser]);

  return (
    <RechargeListStyled>
      {listRecharge.map((recharge, i) => {
        return (
          <div className={classNames("row")} key={i} onDoubleClick={() => dispatch(setRecharge(recharge))}>
            <div className="row__item">
              <div className="title">Player ID</div>
              <div className="playerId">{recharge?.playerId}</div>
            </div>
            <div className="row__item">
              <div className="title">Monto</div>
              <div className="amount">{recharge?.amount / 100}</div>
            </div>
            <div className="row__item">
              <div className="title">Red Social</div>

              <div className="socialMedia">{recharge?.socialMedia}</div>
            </div>
            <div className="row__item">
              <div className="title">Nro de Operacion</div>

              <div className="opNumber">{recharge?.opNumber}</div>
            </div>
            <div className="row__item">
              <div className="title">Metodo de pago</div>
              <div className="paymentMethod">{recharge?.paymentMethod}</div>
            </div>
            <div className="row__item">
              <div className="title">Fecha de creacion</div>
              <div className="createdAt">
                {new Date(Date.parse(recharge?.createdAt)).toLocaleString("es-Es", {
                  hour12: true,
                  dateStyle: "short",
                  timeStyle: "short",
                })}
              </div>
            </div>
          </div>
        );
      })}
    </RechargeListStyled>
  );
};

export default RechargeList;
