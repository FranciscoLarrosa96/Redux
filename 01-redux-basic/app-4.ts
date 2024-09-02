
import { configureStore } from '@reduxjs/toolkit'
import { contadorReducer } from "./contador/contador.reducer";
import { incrementadorAction, Multiplicar } from "./contador/contador.action";

//Instale npm install @reduxjs/toolkit
const store = configureStore({
    reducer: contadorReducer
});

store.subscribe(() => console.log('State->', store.getState()));

store.dispatch(incrementadorAction);
store.dispatch(Multiplicar);
