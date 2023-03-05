import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import expenseTagsReducer from './reducers/expenseTagsSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        expenseTags: expenseTagsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
