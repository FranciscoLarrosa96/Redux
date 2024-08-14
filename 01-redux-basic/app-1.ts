// Acciones
interface Action {
    type: string;
    payload?: any;
}

// const incrementadorAction: Action = {
//     type: 'Incrementar'
// };


// Siempre tiene que regresar un estado
function reducer(state = 10, action: Action) {

    switch (action.type) {
        case 'Incrementar':
            return state += 1;
        case 'Decrementar':
            return state -= 1;
        case 'Multiplicar':
            return state * action.payload;
        case 'Dividir':
            return state / action.payload;
        default:
            return state;
    }
}

// Usar el reducer 

const incrementadorAction: Action = {
    type: 'Incrementar'
};
const DecrementadorAction: Action = {
    type: 'Decrementar'
};
const Multiplicar: Action = {
    type: 'Multiplicar',
    payload: 10
};
const Dividir: Action = {
    type: 'Dividir',
    payload: 2
};

console.log('Reducer=>', reducer(10, incrementadorAction)); //11
console.log('Reducer decrementar=>', reducer(10, DecrementadorAction)); //9
console.log('Reducer multi=>', reducer(10, Multiplicar)); //100
console.log('Reducer multi=>', reducer(10, Dividir)); //5