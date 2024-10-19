import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isLoggedIn: boolean;
    user: null | {
        id: string; 
        username: string;
    };
};

const initialState: AuthState = {
    isLoggedIn: false,
    user: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ id: string; username: string }>) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        setAuthState: (state, action: PayloadAction<AuthState>) => {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.user = action.payload.user;
        },
    },
});

export const { login, logout, setAuthState } = authSlice.actions;
export default authSlice.reducer;