// Acciones
export interface Action {
    type: string;
    payload?: any;
}

export interface Reducer {
    type: string;
    payload?: any;
}