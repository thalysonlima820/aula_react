import { CounterAction } from "../types/actions";
import { estadoinicial } from '../types/num';


export const CounterReducer = (state = estadoinicial, action: CounterAction) => {
    switch (action.type) {
        case "incremento":
            return { numero: state.numero + 1 };
        case "decremento":
            return { numero: state.numero - 1 };
        default:
            return state;
    }
};
