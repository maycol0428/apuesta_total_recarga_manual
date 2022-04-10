import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useNavigationType } from "react-router-dom";
import { promoterSelector } from "state/features/PromoterSlice";
import { addRechargePromoter, rechargeOnePromoterSelector } from "state/features/RechargePromoterSlice";
import { userSelector } from "state/features/UserSlice";
import styled from "styled-components";
import ModalFormUpdateRecharge from "./ModalFormUpdateRecharge/ModalFormUpdateRecharge";
import RechargeList from "./RechargeList/RechargeList";

const DashBoardStyled = styled.div`
  .page__wrapper {
    display: flex;
    max-width: 1500px;
    padding-top: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    form {
      flex: 0.2;
      color: #eaeeff;
      .title {
        font-size: 3rem;
        font-weight: 700;
        color: #eaeeff;
      }
      .form__wrapper {
        display: flex;
        flex-direction: column;
        font-size: 1.5rem;
        gap: 0.5rem;
        input {
          border-radius: 1rem;
          padding: 0.5rem;
          color: #3f4756;
          font-weight: 500;
          outline: 0;
        }
        select {
          color: #3f4756;
          border-radius: 1rem;
          padding: 0.5rem;
          outline: 0;
        }
        button {
          margin-top: 1rem;
          background: #9c0032;
          padding: 1rem;
          font-size: 1.6rem;
          font-weight: 500;
          border-radius: 1rem;
          cursor: pointer;
          transition: 0.2s;
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
    .list {
      flex: 0.8;
    }
  }
`;

const DashBoard = () => {
  const formRef = useRef();
  const dispatch = useDispatch();
  const currentPromoter = useSelector(userSelector);
  const rechargeOne = useSelector(rechargeOnePromoterSelector);
  const nav = useNavigate();
  useEffect(() => {
    if (!currentPromoter) {
      nav("/");
    }
  }, [currentPromoter]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const loginOBJ = Object.fromEntries(new FormData(formRef.current));
    fetch("http://localhost:8000/api/v1/recharge", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginOBJ),
    }).then(async (res) => {
      const json = await res.json();
      console.log(json);
      dispatch(addRechargePromoter(json.recharge));
    });
  };
  return (
    <DashBoardStyled className="page">
      <div className="page__wrapper">
        <form ref={formRef}>
          <div className="title">Recargar</div>
          <div className="form__wrapper">
            <input hidden name="promoterId" type="text" value={currentPromoter?._id} />
            <label htmlFor="playerId">Player ID</label>
            <input id="playerId" name="playerId" type="text" />
            <label htmlFor="amount">Monto</label>
            <input id="amount" name="amount" type="text" />
            <label htmlFor="socialMedia">Social media</label>
            <select id="socialMedia" name="socialMedia">
              <option value={"whatsapp"}>Whatsapp</option>
              <option value={"telegram"}>Telegram</option>
            </select>
            <label htmlFor="opNumber">Nro de operacion</label>
            <input id="opNumber" name="opNumber" type="text" />
            <label htmlFor="paymentMethod">Metodo de pago</label>
            <select id="paymentMethod" name="paymentMethod">
              <option value={"bcp"}>BCP</option>
              <option value={"interbank"}>INTERBANK</option>
              <option value={"yape"}>YAPE</option>
            </select>
            <button onClick={handleOnSubmit}>Enviar</button>
          </div>
        </form>
        <RechargeList></RechargeList>
        {rechargeOne && <ModalFormUpdateRecharge currentPromoterId={currentPromoter?._id}></ModalFormUpdateRecharge>}
      </div>
    </DashBoardStyled>
  );
};

export default DashBoard;
