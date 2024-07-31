import { useEffect, useRef } from "react";

export default function useInterlval (callback: () => void, delay: number) {

    const saveCallback = useRef<() => void>()

    useEffect(() => {
        saveCallback.current = callback
    }, [callback])

    useEffect(() => {
        function tick() {
            saveCallback.current!();
        }

        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }

    }, [delay])

}