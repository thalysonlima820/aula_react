import { testeAction } from "../types/testeAction";
import { testeNum } from "../types/testeNum";

export const TesteReducer = (state = testeNum, action: testeAction) => {
    switch (action.type) {
        case "mais":
            return { valor: state.valor + 1 }
        case "menos":
            return { valor: state.valor - 1 }
        default:
            return state
    }

}