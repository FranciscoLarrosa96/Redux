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

    if(action.type === 'Incrementar'){
        return state += 1;
    }

    return state;

}

// Usar el reducer 

const incrementadorAction: Action = {
    type: 'Incrementar'
};

console.log('Reducer=>',reducer(10, incrementadorAction));