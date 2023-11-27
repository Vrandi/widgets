import { WIDGET_ACTIONS } from "./constants";

export type WidgetData = {
    id: number;
    type: string;
    amount: number;
    action: string;
    active: boolean;
    linked: boolean;
    selectedColor: string;
}

export type GeneralActionPayload = {
    id: number;
}

export type ColorSelectedActionPayload = GeneralActionPayload & {
    selectedColor: string;
}

export type LoadWidgetsActionPayload = {
    widgets: WidgetData[];
}

export type Action = {
    type: WIDGET_ACTIONS;
    payload: GeneralActionPayload | ColorSelectedActionPayload | LoadWidgetsActionPayload;
}