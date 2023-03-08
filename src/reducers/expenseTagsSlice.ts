import { createSlice } from '@reduxjs/toolkit';

const initialState: any = [];

const expenseTagsSlice = createSlice({
    name: 'expenseTags',
    initialState,
    reducers: {
        addExpenseTag: (state, action) => {
            return [...state, action.payload];
        },
        setExpenseTags: (state, action) => {
            return action.payload;
        }
    }
});

export const { addExpenseTag, setExpenseTags } = expenseTagsSlice.actions;
export default expenseTagsSlice.reducer;
