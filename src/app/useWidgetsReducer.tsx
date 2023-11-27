import { useReducer } from "react"
import type { Reducer } from 'react'
import { WIDGET_ACTIONS } from "./constants"
import type { WidgetData, Action, GeneralActionPayload, ColorSelectedActionPayload, LoadWidgetsActionPayload } from "./types"

export const widgetReducer: Reducer<WidgetData[], Action> = (widgets: WidgetData[], action: Action) => {
    switch (action.type) {
        case WIDGET_ACTIONS.LOAD: {
            widgets = (action.payload as LoadWidgetsActionPayload).widgets;
            return widgets;
        }
        case WIDGET_ACTIONS.TOGGLE_ACTIVE: {
            return widgets.map(widget => {
                console.log(action.payload, widget.id)
                if (widget.id === (action.payload as GeneralActionPayload).id) {
                    
                    widget.active = !widget.active;
                } else {
                    widget.active = false;
                }
                return widget;
            }) as WidgetData[];

        }
        case WIDGET_ACTIONS.TOGGLE_LINKED: {
            return widgets.map(widget => {
                if (widget.id === (action.payload as GeneralActionPayload).id) {
                    widget.linked = !widget.linked;
                }
                return widget;
            });
        }
        case WIDGET_ACTIONS.SELECT_COLOR: {
            return widgets.map(widget => {
                const { id, selectedColor } = action.payload as ColorSelectedActionPayload;
                if (widget.id === id) {
                    widget.selectedColor = selectedColor;
                }
                return widget;
            })
        }
        default: {
            throw Error('Unknown action: ' + action.type);
          }
    }   
}

export function useWidgetsReducer() {
    const [widgets, dispatch] = useReducer(widgetReducer, [])

    return { widgets, dispatch }
}