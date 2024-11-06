import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import allReducers from "./reducers";


const defaultMiddleWareOptions: Record<string, boolean> = {
    thunk: false,
    serializableCheck: false,
}

const sagaMiddleware = createSagaMiddleware();

const middlewareCallback = (getDefaultMiddleware: any) => {
    const newMiddleWare = getDefaultMiddleware(defaultMiddleWareOptions).concat(sagaMiddleware);
    return newMiddleWare;
}

const store = configureStore({
    reducer: allReducers,
    middleware: middlewareCallback,
    // devTools: false // TODO : externalise
})

sagaMiddleware.run(rootSaga);

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;