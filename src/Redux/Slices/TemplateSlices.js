import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const TemplateSlices = createSlice({
  name: 'Template',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = TemplateSlices.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectValue = (state) => state.Template.value;

export default TemplateSlices.reducer;
