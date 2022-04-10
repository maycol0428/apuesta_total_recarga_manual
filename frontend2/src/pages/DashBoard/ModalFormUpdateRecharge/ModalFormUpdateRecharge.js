import hexAlpha from "hex-alpha";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rechargeOnePromoterSelector, rechargeUpdate, setRecharge } from "state/features/RechargePromoterSlice";
import styled from "styled-components";

const ModalFormUpdateRechargeStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  z-index: 2;
  background: ${hexAlpha("#000", 0.7)};
  backdrop-filter: blur(1px);
  transform: translateY(0px);
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    min-width: 300px;
    background: #304564;
    padding: 2rem;
    border-radius: 2rem;
    .title {
      white-space: nowrap;
      margin-bottom: 1rem;
    }
    .title__form {
      opacity: 0.5;
    }
    .close {
      width: fit-content;
      margin-left: auto;
      font-size: 3rem;
      line-height: 3rem;
      cursor: pointer;
    }
  }
`;

const ModalFormUpdateRecharge = ({ currentPromoterId }) => {
  const recharge = useSelector(rechargeOnePromoterSelector);
  const [monto, setMonto] = useState(recharge?.amount / 100 ?? 0);
  const formRef = useRef();
  const dispatch = useDispatch();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const loginOBJ = Object.fromEntries(new FormData(formRef.current));
    loginOBJ.amount = monto;
    loginOBJ.playerId = recharge?.playerId;
    loginOBJ.opNumber = recharge?.opNumber;
    fetch("http://192.168.1.36:8000/api/v1/recharge/update", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginOBJ),
    }).then(async (res) => {
      const json = await res.json();
      dispatch(rechargeUpdate(json.recharge));
      dispatch(setRecharge(null));
    });
  };
  return (
    <ModalFormUpdateRechargeStyled>
      <form ref={formRef}>
        <div className="close" onClick={() => dispatch(setRecharge(null))}>
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
        <div className="title">Actualizar Monto</div>
        <div className="form__wrapper">
          <input hidden name="promoterId" type="text" value={currentPromoterId} />
          <div className="title__form">Player ID</div>
          <div>{recharge?.playerId}</div>
          <div className="title__form">Nro Operacion</div>
          <div>{recharge?.opNumber}</div>
          <div className="title__form">Monto</div>
          <input onChange={(e) => setMonto(e.target.value)} type="text" value={monto} />
          <button onClick={handleOnSubmit}>Actualizar</button>
        </div>
      </form>
    </ModalFormUpdateRechargeStyled>
  );
};

export default ModalFormUpdateRecharge;
