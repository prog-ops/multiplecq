import {Action, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import rootReducer from './reducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {persistStore} from "redux-persist";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});

export const persistor = persistStore(store);
export type AppDispatch = ThunkDispatch<RootState, void, Action>
export const useAppDispatch = (args?: any) => useDispatch<AppDispatch>()
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store;