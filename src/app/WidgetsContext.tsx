import { createContext, useContext, useEffect } from "react";
import type { Dispatch } from "react";
import type { WidgetData, Action } from "./types"
import { useWidgetsReducer } from './useWidgetsReducer';
import { WIDGET_ACTIONS } from "./constants";
import { Skeleton } from "@mui/material";
import { useState } from "react";

const WidgetsContext = createContext<WidgetData[]>([]);
const WidgetsDispatchContext = createContext<Dispatch<Action>>({} as Dispatch<Action>);

export function useWidgets() {
    return useContext(WidgetsContext);
}

export function useWidgetsDispatch() {
    return useContext(WidgetsDispatchContext);
}

export default function WidgetsProvider({ children }: React.PropsWithChildren) {
    const [loaded, setLoaded] = useState(false);
    const { widgets, dispatch } = useWidgetsReducer();

    useEffect(() => {
        const loadWidgets = () => {
            return fetch("https://api.mocki.io/v2/016d11e8/product-widgets")
                .then(data => data.json())
                .then(widgets => {
                    dispatch({ type: WIDGET_ACTIONS.LOAD, payload: { widgets } })
                    setLoaded(true);
                })
                .catch(err => console.log(err))
        };
        loadWidgets();
    }, []);

    return (
        <WidgetsContext.Provider value={widgets}>
            <WidgetsDispatchContext.Provider value={dispatch}>
                {loaded ? (children) : (
                    <Skeleton variant="rectangular" sx={{width: { xs: '331px', md: '852px'}, height: { xs: '697px', md: '419px' }}} />
                )}
            </WidgetsDispatchContext.Provider>
        </WidgetsContext.Provider>
    )
}

