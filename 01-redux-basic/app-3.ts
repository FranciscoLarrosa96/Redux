import { incrementadorAction, Multiplicar } from "./contador/contador.action";
import { contadorReducer } from "./contador/contador.reducer";
import { Action, Reducer } from "./ngrx-fake/ngrx";

class Store<T> {

    constructor(private reducer: Reducer<T>, private state: T) {

    }

    getState() {
        return this.state;
    }

    dispatch(action: Action) {
        this.state = this.reducer(this.state, action);
    }
}

const store = new Store(contadorReducer, 10);
console.log("🚀 ~ store:", store)

store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
console.log("🚀 ~ store2:", store.getState())

store.dispatch(Multiplicar);

console.log("🚀 ~ MULT:", store.getState())