import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

export const UserSlices = createSlice({
  name: 'User',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setValue: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setValue } = UserSlices.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectToken = (state) => state.User.token;

export default UserSlices.reducer;
