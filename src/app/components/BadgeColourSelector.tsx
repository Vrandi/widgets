import { styled } from "@mui/material/styles";
import { COLORS, WIDGET_ACTIONS } from "../constants";
import { useWidgetsDispatch } from "../WidgetsContext";
import DataLabel from "./DataLabel";

const Container = styled('div')`
    display: flex;
    width: 220px;
    justify-content: space-between;
    align-items: center;
`;

const ColorsContainer = styled('div')`
    display: flex;
    align-items: center;
    gap: 4px;
`;

const Color = styled("div", {
    shouldForwardProp: (prop) => true
  })<{ active?: number; color?: string }>(
    ({ active, color }) => `
    height: 16px;
    width: 16px;
    background: ${color};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.01);
    border: ${active && '1.50px #B0B0B0 solid'}
`);

export default function BadgeColourSelector({id, selectedColor}: { id: number, selectedColor: string}) {
    const dispatch = useWidgetsDispatch();

    return (
        <Container>
            <DataLabel label="Badge colour"/>
            <ColorsContainer>
                {Object.keys(COLORS).map(colorKey => (
                    <Color key={colorKey}
                           color={COLORS[colorKey]}
                           active={colorKey === selectedColor ? 1 : 0}
                           onClick={() => {
                             dispatch({ type: WIDGET_ACTIONS.SELECT_COLOR, payload: {id, selectedColor: colorKey }})
                           }}/>
                ))}
            </ColorsContainer>
        </Container>
    );
}