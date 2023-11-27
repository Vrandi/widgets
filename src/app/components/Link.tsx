import { styled } from "@mui/material/styles";
import { Checkbox } from "@mui/material";
import WidgetTooltip from "./Tooltip";
import { COLORS, WIDGET_ACTIONS } from "../constants";
import { useWidgetsDispatch } from "../WidgetsContext";
import DataLabel from "./DataLabel";

const Container = styled('div')`
    display: flex;
    width: 220px;
    justify-content: space-between;
    align-items: center;
`;

export default function Link({ id, linked } : { id: number, linked: boolean}) {
    const dispatch = useWidgetsDispatch();
    return (
        <Container>
            <DataLabel label="Link to Public Profile">
                <WidgetTooltip />
            </DataLabel>
            <div style={{ marginRight: -10, marginBottom: -5 }}>
                <Checkbox
                    checked={linked}
                    onClick={() => {
                        dispatch({ type: WIDGET_ACTIONS.TOGGLE_LINKED, payload: { id }})
                    }}
                    sx={{
                    color: COLORS.green,
                    '&.Mui-checked': {
                        color: COLORS.green,
                }}} />
            </div>
        </Container>
    )
}