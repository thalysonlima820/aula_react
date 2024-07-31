import { useReducer, useEffect } from "react";
import axios from "axios";

const httpReducer = (state, action) => {

    switch(action.type){
        case "SEND":
            return {data: null, error: null, loading: true }
        case "SUCCESS":
            return {data: action.responseDate, error: null, loading: false }
        case "ERROR":
            return {data: null, error: action.errorMessage, loading: false }
        default:
            return state;
    }
};

const useHttp = (url, method = "GET", body = null, dependencies = []) => {

    const [httpState, dispatch] = useReducer(httpReducer, {
        loading: false,
        data: null,
        error: null
    });

    useEffect(() => {

        const fetchData = async() => {
            dispatch({type: "SEND"})
            
            try {
                const resposta = await axios({url, method, data: body})
                dispatch({type: "SUCCESS", responseDate: resposta.data})
            } catch (error) {
                dispatch({type: "ERROR", errorMessage: "algo deu errado ao consumir api" })
            }
        }

        fetchData()

    }, dependencies);

    return httpState
}

export default useHttp;