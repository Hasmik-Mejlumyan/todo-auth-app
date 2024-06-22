import {configureStore} from "@reduxjs/toolkit";
import reduers from "./reducers";


const store = configureStore({
  reducer: reduers,
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;