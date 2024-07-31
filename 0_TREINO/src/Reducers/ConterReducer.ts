import { CounterAction } from '../types/action';
import { valor } from '../types/valor';

export const ConterReducer = (state = valor, action: CounterAction) => {
    switch (action.type) {
        case "mais":
            return { numero: state.numero + 1 }
        case "menos":
            return { numero: state.numero - 1 }
        default:
            return state
    }
}
