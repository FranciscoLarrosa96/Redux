import { DecrementadorAction, Dividir, incrementadorAction, Multiplicar, Reset } from "./contador/contador.action";
import { reducer } from "./contador/contador.reducer";



console.log('Reducer mas 1=>', reducer(10, incrementadorAction)); //11
console.log('Reducer decrementar=>', reducer(10, DecrementadorAction)); //9
console.log('Reducer multi=>', reducer(10, Multiplicar)); //100
console.log('Reducer div=>', reducer(10, Dividir)); //5
console.log('Reducer reset=>', reducer(10, Reset)); //0