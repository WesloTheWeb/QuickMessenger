import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value = (state.value || 0) + 1;
        },
        decrement: (state) => {
            state.value = (state.value || 0) - 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value = (state.value || 0) + action.payload;
        },
        setInitialCount: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount, setInitialCount } = counterSlice.actions;

export default counterSlice.reducer;