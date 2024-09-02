import { DecrementadorAction, Dividir, incrementadorAction, Multiplicar, Reset } from "./contador/contador.action";
import { contadorReducer } from "./contador/contador.reducer";



console.log('Reducer mas 1=>', contadorReducer(10, incrementadorAction)); //11
console.log('Reducer decrementar=>', contadorReducer(10, DecrementadorAction)); //9
console.log('Reducer multi=>', contadorReducer(10, Multiplicar)); //100
console.log('Reducer div=>', contadorReducer(10, Dividir)); //5
console.log('Reducer reset=>', contadorReducer(10, Reset)); //0