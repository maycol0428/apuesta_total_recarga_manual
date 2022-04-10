import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recharges: [],
  recharge: null,
};

export const rechargePromoterSlice = createSlice({
  name: "rechargePromoter",
  initialState,
  reducers: {
    addRechargePromoter: (state, action) => {
      state.recharges = [action.payload, ...state.recharges];
    },
    setRecharge: (state, action) => {
      state.recharge = action.payload;
    },
    setRecharges: (state, action) => {
      state.recharges = action.payload;
    },
    rechargeUpdate: (state, action) => {
      state.recharges = state.recharges.map((item) => {
        if (item._id === action.payload._id) {
          item.amount = action.payload.amount;
        }
        return item;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addRechargePromoter, setRecharge, setRecharges, rechargeUpdate } = rechargePromoterSlice.actions;
export const rechargePromoterSelector = (state) => state.rechargePromoter.recharges;
export const rechargeOnePromoterSelector = (state) => state.rechargePromoter.recharge;

export default rechargePromoterSlice.reducer;
