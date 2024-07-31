import { useState } from "react";

export default function useTreino() {

    const [n, setN] = useState(1)

    function somar (n) {
        setN(n * 2)
    }

    return {n, somar}

}