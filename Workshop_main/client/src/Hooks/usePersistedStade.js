//Adv techniques
import { useState } from "react";
//synchronize auth state at react and localStorage
export default function usePersistedState(key, defaultValue) {

    const [state, setState] = useState(() => {
        const persistState = localStorage.getItem(key);

        if (persistState) {
            return JSON.stringify(persistState);
        }
        return defaultValue;
    });
    const setPersistedState = (value) => {
        setState(value);
        let serialValue;

        if (typeof value === 'function') {
            serialValue = JSON.stringify(value(state));
        } else {
            serialValue = JSON.stringify(value);
        }

        localStorage.setItem(key, serialValue);

    };

    return [
        state,
        setPersistedState
    ];
}