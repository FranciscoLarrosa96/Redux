// Usar el reducer 

import { Action } from "../ngrx-fake/ngrx";

export const incrementadorAction: Action = {
    type: 'Incrementar'
};
export const DecrementadorAction: Action = {
    type: 'Decrementar'
};
export const Multiplicar: Action = {
    type: 'Multiplicar',
    payload: 10
};
export const Dividir: Action = {
    type: 'Dividir',
    payload: 2
};
export const Reset: Action = {
    type: 'Reset'
};