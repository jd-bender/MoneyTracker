import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {};

const expenseTagsSlice = createSlice({
    name: 'expenseTags',
    initialState,
    reducers: {
        addExpenseTag: (state, action) => {
            return [...state.value, action.payload];
        }
    }
});

export const { addExpenseTag } = expenseTagsSlice.actions;
export default expenseTagsSlice.reducer;
