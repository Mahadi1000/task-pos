import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  counter: number;
}

const initialState: CounterState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counterSlice",

  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      if (state.counter === 0) return;
      state.counter -= 1;
    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
