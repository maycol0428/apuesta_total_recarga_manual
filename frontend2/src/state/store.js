import { configureStore } from "@reduxjs/toolkit";
import promoterReducer from "state/features/PromoterSlice";
import userReducer from "state/features/UserSlice";
import rechargePromoterReducer from "state/features/RechargePromoterSlice";
export const store = configureStore({
  reducer: {
    promoter: promoterReducer,
    user: userReducer,
    rechargePromoter: rechargePromoterReducer,
  },
});
