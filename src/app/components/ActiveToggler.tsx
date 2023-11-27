import { styled } from "@mui/material/styles";
import { COLORS, WIDGET_ACTIONS } from "../constants";
import { useWidgetsDispatch } from "../WidgetsContext";
import Toggle from "./Toggle";
import DataLabel from "./DataLabel";

const Container = styled('div')`
    display: flex;
    width: 220px;
    justify-content: space-between;
    align-items: center;
`;

const ContentContainer = styled('div')`
    display: flex;
    height: 17px;
    padding-right: 0px;
    align-items: center;
`;

export default function ActiveToggler({ id, active }: { id: number, active: boolean }) {
    const dispatch = useWidgetsDispatch();

    return (
        <Container>
            <DataLabel label="Activate Badge"/>
            <Toggle checked={active} onChange={() => {
                    dispatch({ type:  WIDGET_ACTIONS.TOGGLE_ACTIVE, payload: { id }})
            }}/>
        </Container>
    );
}