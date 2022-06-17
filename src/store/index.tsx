import {
    AnyAction,
    combineReducers,
    configureStore,
    Reducer
} from '@reduxjs/toolkit';
import ordersSlice from './orders-slice';
const combinedReducer = combineReducers({
    orders: ordersSlice.reducer
})
const rootReducer: Reducer = (
    state: ReturnType<typeof store.getState>,
    action: AnyAction
    ) => {
        return combinedReducer(state, action);
    }
    
const store = configureStore({
    reducer: rootReducer
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export default store; 