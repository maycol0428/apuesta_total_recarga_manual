import { createSlice } from "@reduxjs/toolkit";

const promoters = [
  {
    id: 1,
    name: "Maycol Christian",
    rechargeDelay: { hours: 2, minutes: 10 },
    paymentMethods: [
      {
        BCP: "34234324-32-42-432",
      },
      { INTERBANK: "34234-2-432-4-2-4" },
      {
        YAPE: "+51975565407",
      },
    ],
    socials: {
      whatsapp: "+51975565407",
      telegram: "+51975565407",
    },
  },
  {
    id: 2,
    name: "Ivone Aponte",
    rechargeDelay: { hours: 1, minutes: 20 },
    paymentMethods: [
      {
        BCP: "34234324-32-42-432",
      },
      { INTERBANK: "34234-2-432-4-2-4" },
      {
        YAPE: "+51975565407",
      },
    ],
    socials: {
      whatsapp: "+51975565407",
      telegram: "+51975565407",
    },
  },
  {
    id: 3,
    name: "Pepe Gonzales",
    rechargeDelay: { hours: 0, minutes: 5 },
    paymentMethods: [
      {
        BCP: "34234324-32-42-432",
      },
      { INTERBANK: "34234-2-432-4-2-4" },
      {
        YAPE: "+51975565407",
      },
    ],
    socials: {
      whatsapp: "+51975565407",
      telegram: "+51975565407",
    },
  },
];

const initialState = {
  promoter: null,
  promoters: promoters,
};

export const promoterSlice = createSlice({
  name: "promoter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setPromoter: (state, action) => {
      const promoter = promoters.find((prom) => prom.id === action.payload);
      state.promoter = promoter;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, setPromoter, decrement, incrementByAmount } =
  promoterSlice.actions;
export const promoterSelector = (state) => state.promoter.promoter;

export default promoterSlice.reducer;
