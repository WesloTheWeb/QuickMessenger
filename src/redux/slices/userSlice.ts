import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileUser } from '@/interfaces/UserInterface';

type UserState = ProfileUser;

const initialState: UserState = {
  id: '',
  firstName: '',
  lastName: null,
  username: '',
  gender: null,
  age: null,
  country: null,
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
