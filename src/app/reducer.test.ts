import { widgetReducer } from "./useWidgetsReducer"
import { WIDGET_ACTIONS } from "./constants";

const testData = [{
        id: 1,
        type: "plastic bottles",
        amount: 100,
        action: "collects",
        active: true,
        linked: true,
        selectedColor: "green"
    }, {
        id: 2,
        type: "trees",
        amount: 10,
        action: "plants",
        active: false,
        linked: false,
        selectedColor: "black"
    }, {
        id: 3,
        type: "carbon",
        amount: 20,
        action: "offsets",
        active: false,
        linked: false,
        selectedColor: "blue"
}];

describe('WidgetReducer', () => {
    test('Loaded widgets should match', () => {
        const loadedWidgets = widgetReducer([], { type: WIDGET_ACTIONS.LOAD, payload: { widgets: testData }});
        expect(loadedWidgets).toEqual(testData);
    })

    test('Widget active state should change on toggle', () => {
        const updatedWidgets = widgetReducer(testData, { type: WIDGET_ACTIONS.TOGGLE_ACTIVE, payload: { id: 2 }});
        expect(updatedWidgets[0].active).toBe(false);
        expect(updatedWidgets[1].active).toBe(true);
    })

    test('Widget linked state should change on toggle', () => {
        const updatedWidgets = widgetReducer(testData, { type: WIDGET_ACTIONS.TOGGLE_LINKED, payload: { id: 2 }});
        expect(updatedWidgets[1].linked).toBe(true);
    })

    test('Widget color should change on select', () => {
        const updateColor = 'beige';
        const updatedWidgets = widgetReducer(testData, { type: WIDGET_ACTIONS.SELECT_COLOR, payload: { id: 1, selectedColor: updateColor }});
        expect(updatedWidgets[0].selectedColor).toBe(updateColor)
    })
})