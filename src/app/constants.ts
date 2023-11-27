
export enum WIDGET_ACTIONS {
    LOAD = 'LOAD_WIDGETS',
    TOGGLE_ACTIVE = 'TOGGLE_ACTIVE_STATE',
    TOGGLE_LINKED = 'TOGGLE_LINKED_STATE',
    SELECT_COLOR = 'SELECT_COLOR'
}

interface ColorMap {
    [key: string]: string | undefined
  }

export const COLORS: ColorMap = {
    blue: '#2E3A8C',
    green: '#3B755F',
    beige: '#F2EBDB',
    white: '#FFFFFF',
    black: '#212121'
}